// export function debounce(func: { apply: (arg0: any, arg1: IArguments) => void; }, wait: number | undefined, immediate: any) {
//     let timeout: any;
//     return function() {
//         var context = this, args = arguments;
//         var later = function() {
//             timeout = null;
//             if (!immediate) func.apply(context, args);
//         };
//         var callNow = immediate && !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// }; 
export {}