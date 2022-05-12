// window.jQuery = function (selectorOrArray) {



//     let elements
//     if (typeof selectorOrArray === 'string') {
//         elements = document.querySelectorAll(selectorOrArray)
//     } else if (selectorOrArray instanceof Array) {
//         elements = selectorOrArray
//     }



//     return {
//         // addClass(className) {
//         //     for (let i = 0; i < elements.length; i++) {
//         //         elements[i].classList.add(className);
//         //     }
//         //     return this
//         // },
//         addClass(className) {
//             for (let i = 0; i < elements.length; i++) {
//                 elements[i].classList.add(className)
//             }
//             return this
//         },
//         find(selector) {
//             let array = []
//             for (let i = 0; i < elements.length; i++) {
//                 const elements2 = Array.from(elements[i].querySelectorAll(selector))
//                 array = array.concat(elements2)
//             }
//             array.oldApi = this
//         },
//     };
// };

// .......................................
window.jQuery = function (selectorOrArray) {
    let elements
    if (typeof selectorOrArray === 'string') {
        elements = document.querySelectorAll(selectorOrArray)
    } else if (selectorOrArray instanceof Array) {
        elements = selectorOrArray
    }
    return {

        find(selector) {
            let array = []
            for (let i = 0; i < elements.length; i++) {
                const elements2 = Array.from(elements[i].querySelectorAll(selector))
                array = array.concat(elements2)
            }
            return jQuery(array)
            array.oldApi = this
        },
        addClass(className) {
            for (let i = 0; i < elements.length; i++) {
                elements[i].classList.add(className)
            }
            return this
        },
        oldApi: selectorOrArray,

    }
}
