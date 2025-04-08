

// requires AFRAME
import 'aframe-troika-text';


export const register_jtext = function (AFRAME) {
    console.log("Register JRegister JText component!")
    // // mytext ComponentComponent
        AFRAME.registerComponent('jtext', {
    schema: {
      text: { type: 'string', default: '' },
      width: { type: 'number', default: 1 },
      height: { type: 'number', default: 0.12 },
      color: { type: 'string', default: 'black' },
      background: { type: 'string', default: 'white' },
      border: { type: 'string', default: 'black' }
    },

    init: function () {
      const el = this.el;
      const data = this.data;

      // 背景枠（外側）＝ ボーダー
      /*
      const border = document.createElement('a-plane');
      border.setAttribute('width', data.width + 0.02);
      border.setAttribute('height', data.height + 0.02);
      border.setAttribute('color', data.border);
      border.setAttribute('position', '0 0 0');
        */
      // 背景（内側）
      const bg = document.createElement('a-plane');
      bg.setAttribute('width', data.width);
      bg.setAttribute('height', data.height);
      bg.setAttribute('color', data.background);
      bg.setAttribute('position', '0 0 0.01');
      bg.setAttribute('opacity', '0.8');

      // テキスト// 初期値しか使わないから！
      const text = document.createElement('a-entity');
      console.log("Text:",data.text)
      text.setAttribute('troika-text', {
        value: data.text,
        align: 'center',
        color: data.color,
        fontSize: 0.05,
        maxWidth: data.width * 0.9,
        font: "BIZUDPGothic-Bold.ttf",
      });
      text.setAttribute('position', '0 0 0.01');
      this.text = text;
//          el.appendChild(border);
      el.appendChild(bg);
      el.appendChild(text);
    },
    update: function(oldData){
      const data = this.data;
      this.text.setAttribute('troika-text', {
        value: data.text,
        align: 'center',
        color: data.color,
        fontSize: 0.05,
        maxWidth: data.width * 0.95,
        font: "BIZUDPGothic-Bold.ttf",
      });
      this.text.setAttribute('position', '0 0 0.01');

        //          console.log("update:",oldData,this.data.text)

    },
    setText: function(text){

    }

  });
}