// 1
document.body.style.backgroundImage = 'url("/images/bg5.png")';

// 2
let gallery1 = document.getElementById('gallery');

gallery1.style.border = '4px solid #5D9A90';
gallery1.style.margin = '30px 0';

// 3
let children = gallery1.children;
for (let child of children)
{
    child.style.opacity = '0.5';
}

// 4
let h1 = document.querySelector('h1');
h1.textContent = 'ЗМІСТ СТОРІНКИ';

// 5
let h2 = document.querySelector('h2.title');
h2.style.display = 'none';

// 6
let article = document.querySelectorAll('article');
article.forEach(art =>
{
    art.style.marginBottom = '30px';
});

// 7
article.forEach((art, index) =>
{
    index % 2 === 0 ? art.style.backgroundColor = '#A3CFD8' : art.style.backgroundColor = '#D8A3D5';
});

// 8
let current = document.querySelector('.current');
if (current && current.parentElement)
{
    current.parentElement.style.borderLeft = '2px dotted red';
}

// 9
let lastArticle = article[article.length - 1];
let lastLink = lastArticle.querySelector('a');

if (lastLink)
{
    lastLink.style.color = '#fff';
    lastLink.style.backgroundColor = '#7F4196';
}

// 10
let liInfo = document.querySelector('.info');

if (liInfo && liInfo.nextElementSibling)
{
    liInfo.nextElementSibling.style.color = '#7F4196';
}

// 11
let about = document.querySelector('h2.about');
console.log(about.textContent);

// 12
console.log(document.body.innerHTML);

// 13
console.log(document.body.children);

// 14
let ul = document.querySelector('ul');
let first_li = ul.firstElementChild;
let last_li = ul.lastElementChild;

if (last_li && first_li)
{
    first_li.textContent = last_li.textContent;
}