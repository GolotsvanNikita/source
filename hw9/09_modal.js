/*
1. 
при нажатии на кнопку добавить обработчик showBox

В обработчике showBox()
создать перекрывающий див с 
классом -cover
стилями
  background:rgba(0,0,0,0.5)
  position:fixed
  left: 0
  top: 0
  bottom: 0
  right: 0
  z-index: 9000
и добавить в body
Проверить!

2. Назначить div.cover  по клику на нем обработчик hideBox()
Примечание - это действие необходимо сделать в момент создания div.cover

3. В hideBox() удалить  div.cover

Проверить! см. Elements

4. Дополнить обработчик showBox() 
  
   Создать div с классами  'box',
    и css
            background:#fff
            position:absolute 
            left:50%
            top:50%
             margin-left: -200px
             margin-top: -250px
            width:400px
            height:500px
            z-index: 9010

добавить в body
Проверить! 

5. Дополнить обработчик hideBox()
   удалить  div.box
   Проверить! см. Elements

6. Дополнить обработчик showBox() 
  
  Создать a с классом  'close',
  и css
          background:#B93737
          position:absolute 
          right:20px
          top:20px
          width:40px
          height:40px
          

добавить в div.box
Проверить! 

7. Для a.close добавить обработчик по клику hideBox();

8. Добавить возможность закрыть всплывающее окно при нажатии на ESC
    // при нажатии на ESC
    document.addEventListener('keydown',function(e) {
        if (e.key == 'Escape') { 
          hideBox();
        }
    })

9. Клонируйте форму и добавьте в div.box. Сделайте ее видимой.


*/
const btn = document.querySelector('.btn');

btn.addEventListener('click', showBox);

function showBox()
{
    const el = document.createElement('div');
    const box = document.createElement('div');
    const a = document.createElement('a');

    const form = document.querySelector('form');
    let clonedForm = form.cloneNode(true);

    el.addEventListener('click', hideBox);
    function hideBox()
    {
        el.remove();
        box.remove();
        a.remove();
    }
    document.addEventListener('keydown', function(e)
    {
       if (e.key === 'Escape')
       {
           hideBox();
       }
    });
    el.classList.add('-cover');
    box.classList.add('box');
    a.classList.add('close');
    el.style.cssText =
    `
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 9000;
    `;

    box.style.cssText =
    `
        background: #fff;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -200px;
        margin-top: -250px;
        width: 400px;
        height: 500px;
        z-index: 9010;
    `;

    a.style.cssText =
    `
        background: #B93737;
        position: absolute; 
        right: 20px;
        top: 20px;
        width: 40px;
        height: 40px;
    `;
    clonedForm.style.display = 'block';
    document.body.append(el);
    document.body.append(box);
    box.append(a);
    box.append(clonedForm);
}
