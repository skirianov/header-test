const e=document.getElementById("iphone-12-pro-max-lt"),t=document.getElementById("iphone-12-pro-max-dk"),a=e.getContext("2d"),n=t.getContext("2d"),d=document.getElementById("upload"),o=e.height,g=e.width,s=new Image;s.src="./assets/iphone-lt.png",s.onload=()=>{a.drawImage(s,0,0,e.width,e.height)};const h=new Image;h.src="./assets/iphone-dk.png",h.onload=()=>{n.drawImage(h,0,0,e.width,e.height)};const i=t=>{const d=new Image;d.src=t,d.onload=()=>{a.drawImage(d,22,19,.9*g,.58*o),a.drawImage(s,0,0,e.width,e.height),n.drawImage(d,22,19,.9*g,.58*o),n.drawImage(h,0,0,e.width,e.height)}};i("./assets/test.png");d.onchange=async()=>{const e=d.files[0],t=await(async e=>await URL.createObjectURL(e))(e);i(t)};
//# sourceMappingURL=index.c96c0f50.js.map