import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TagSection = styled.section`
  display: flex;
  justify-content: space-between;
  border: 1px solid blue;
  height: 20px;
  margin-bottom: 30px;
  @media (min-width: 900px){
    margin-right: 30px;
  }
  `

const TagLink = styled.a`
  text-decoration: none;
  color: #0000EE;
`

const Grid = styled.section`
  display: grid;
  grid-column-gap: 0.625em;
  grid-row-gap: 1.875em;
  
  @media (min-width: 900px){
    margin-right: 30px;
  }

  @media (min-width: 22em){
    grid-column-gap: 1.25em;
    grid-row-gap: 1.25em;
  }

  @media (min-width: 48em){
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 64em){
    grid-column-gap: 2.5em;
    grid-row-gap: 2.5em;
  }
  @media (min-width: 48em){
    grid-column-gap: 1.875em;
    grid-row-gap: 1.875em;
  }
  
  @media (min-width: 80em){
    -ms-grid-columns: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
  
`
const Article = styled.article`
  border: 1px solid red;
`

const ArtImg = styled.img`
  height: 70%;
  width: 100%;
`

const formatDate = (date: string) => {
  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
  const parsedDate = parseInt(date.substring(5, 7))
  const newDate = date.substring(8, 10) + ' de ' + months[parsedDate - 1] + ' de ' + date.substring(0, 4)
  return newDate
}

const Articles = () => {
  const [articles, setArticles] = useState([])

  try {
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios.get(
          'https://api-test-ln.herokuapp.com/articles'
        )
        // Decidí filtrar los articulos que no tengan foto
        setArticles(data.articles.filter((art: any) => art?.promo_items?.basic.url))
      }
      getData()
    }, [])
  } catch (error) {
    console.log(error)
  }

  // Decidí ordenar los tags en orden alfabético. Es mi interpretación de la consigna: "ordenar los tags de mayor a menor",
  // debido a que los objetos tag no disponen de una propiedad numerica o que haga referencia a un numero.
  let tagList: any[] = []
  let tagsArr: any[] = []

  // Concatena los tags de todos los articulos y los ordena alfabeticamente segun propiedad "text"
  const finalList = () => {
    articles.map((article: any) => {
      const tags = article.taxonomy.tags
      return tags.map((tag:any) => {
        tagsArr = (tagsArr.concat(tag).sort((a, b) => (a.text > b.text) ? 1 : -1))
        return tagsArr
      })
    })
    let tagsArrLast: any[] = []
    tagsArrLast.push(tagsArr[0])

    // Remueve los elementos repetidos segun propiedad "slug"
    tagsArrLast = tagsArr.filter(function (a) {
      return !tagsArr[a.slug] && (tagsArr[a.slug] = true)
    }, Object.create(null))

    // Abstrae los 10 primeros elementos en la lista
    tagList = tagsArrLast.slice(0, 10)
  }

  finalList()

  return (
    <div>
        <TagSection>
          {
          tagList.map((tag: any) =>
            <TagLink key={tag.slug} href={tag.slug}>{tag.text}</TagLink>
          )
        }
        </TagSection>
      <Grid>
        {
          articles.map((article: any) =>
            <Article key={article._id}>
              <ArtImg src={article?.promo_items?.basic.url}/>
              <h4>{article.headlines.basic}</h4>
              <p>{formatDate(article.display_date)}</p>
            </Article>
          )
        }
      </Grid>
    </div>
  )
}

export default Articles