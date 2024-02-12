/**
 * Created by Jacob Humston, Emma Rhoden, and Kayden Justice.
 * All rights reserved.
 */

console.time('Load Time');

function main() {
    document.title = `${document.title} | Rarden Daily Bread`;

    {
        const footerCopyRight = document.getElementById('footer-copyright');
        if (footerCopyRight !== null) {
            const date = new Date();
            const year = date.getFullYear();
            footerCopyRight.innerText = footerCopyRight.innerText.replace('2024', year);
        }
    }

    console.timeEnd('Load Time');
}

window.addEventListener('load', main);
