class TextEditor
{
    constructor(selector)
    {
        this.editor = document.querySelector(selector);
        this.buttons = document.querySelectorAll('button');
        this.colorInput = document.querySelector('.color');
        this.fontSizeSelect = document.querySelector('.fontSize');
        this.fontFamilySelect = document.querySelector('.fontFamily');
        this.init();
    }

    init()
    {
        const self = this;

        let functions =
        [
            function textBold()
            {
                self.editor.style.fontWeight = (self.editor.style.fontWeight === 'bold') ? '' : 'bold';
            },
            function textItalic()
            {
                self.editor.style.fontStyle = (self.editor.style.fontStyle === 'italic') ? '' : 'italic';
            },
            function textUnderline()
            {
                self.editor.style.textDecoration = (self.editor.style.textDecoration === 'underline') ? '' : 'underline';
            },
            function reset()
            {
                self.editor.style.fontWeight = '';
                self.editor.style.fontStyle = '';
                self.editor.style.textDecoration = '';
                self.editor.style.color = 'black';
                self.editor.style.fontSize = '14px';
                self.editor.style.fontFamily = 'Arial';
            },
        ];

        for (let i = 0; i < this.buttons.length; i++)
        {
            this.buttons[i].addEventListener('click', () =>
            {
                for (let j = 0; j < functions.length; j++)
                {
                    if (functions[j].name.toLowerCase().includes(this.buttons[i].className.toLowerCase()))
                    {
                        functions[j]();
                    }
                }
            });
        }

        this.colorInput.addEventListener('input', () =>
        {
           this.setInputOrChangeStyle(this.colorInput.value, 'c');
        });

        this.fontSizeSelect.addEventListener('change', () =>
        {
            this.setInputOrChangeStyle(this.fontSizeSelect.value, 's');
        });

        this.fontFamilySelect.addEventListener('change', () =>
        {
            this.setInputOrChangeStyle(this.fontFamilySelect.value, 'f');
        });
    }

    setInputOrChangeStyle(value, search)
    {
        const styles =
        {
            c: 'color',
            s: 'fontSize',
            f: 'fontFamily'
        }
        this.editor.style[styles[search]] = search === 's' ? value + 'px' : value;
    }
}

const editor = new TextEditor('.editor');
