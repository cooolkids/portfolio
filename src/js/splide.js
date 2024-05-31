
import  Splide  from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

export function splide() {

    new Splide('#splide',{
        type:"loop",
        drag: true,
        autoWidth: true,
        gap:0,
        pagination: true,
        // focus:'center',
        arrows: false,
        autoScroll:{
            speed:2,
        },
    }).mount({ AutoScroll });
  
}
