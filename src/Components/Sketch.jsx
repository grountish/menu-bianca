import React from "react";
import p5 from "p5";

let c, l, l2, a, b, s, t, u, d, i, o3;

export default class Sketch extends React.Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        this.canvas.remove();
        this.myP5 = new p5(this.sketch, this.myRef.current);
      }

    componentDidMount(){
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    componentWillUnmount =()=> {
        this.canvas.remove();
    }
    
    
    sketch = (p) => {
        const self = this;
        let cnv = null;
      
        p.preload = () => {
            c = p.loadImage("pngs/01.png");
            l = p.loadImage("pngs/03.png");
            l2 = p.loadImage("pngs/04.png");
            a = p.loadImage("pngs/05.png");
            b = p.loadImage("pngs/06.png");
            s = p.loadImage("pngs/08.png");
            t = p.loadImage("pngs/09.png");
            u = p.loadImage("pngs/10.png");
            d = p.loadImage("pngs/11.png");
            i = p.loadImage("pngs/12.png");
            o3 = p.loadImage("pngs/13.png");
        }

        p.setup = () => {
            cnv = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
            self.canvas = cnv;

            cnv.position(0, 0);
            cnv.style("z-index", "1");
            cnv.parent("#root");
        }

        p.windowResized = () => {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        }

        p.draw = () => {
            if (p.windowWidth > 500) {
                p.smooth();
               
                p.background(255, 0);
                p.scale(0.4 + p.mouseY / 4000);
                p.image(c, -340, -30);
                p.rotateY(p.mouseX / -12000);
                p.image(o3, -200, -30);
                p.rotateY(p.mouseX / -12000);
                p.image(l, -80, -30);
                p.rotateY(p.mouseX / -12000);
                p.image(l2, 30, -30);
                p.rotateY(p.mouseX / -12000);
                p.image(a, 140, -30);
                p.rotateY(p.mouseX / -12000);
                p.image(b, 260, -30);
                p.rotateY(p.mouseX / -12000);
                p.image(o3, 390, -30);
                p.rotateX(p.mouseX / 10000);
                p.rotateX(p.mouseY / 1134);

                p.image(s, -345, 130);
                p.rotateY(p.mouseX / -12000);
                p.image(t, -220, 130);
                p.rotateY(p.mouseX / 120000);
                p.image(u, -80, 130);
                p.rotateY(p.mouseY / 22000);
                p.image(d, 40, 130);
                p.rotateY(p.mouseY / 12000);
                p.image(o3, 210, 130);
                p.rotateY(p.mouseY / 12000);
                p.image(i, 130, 130);
                p.rotateY(p.mouseY / 12000);

                p.ambientLight(0, 255, 30);

                for (let i = 0; i < 10; i++) {
                    p.translate(-200, 32);
                    p.rotateY(1000);
                    p.ambientMaterial(250);
                    p.sphere(((p.mouseX / 100) % 20) + 3 * i, 25, 25);
                }
            } else {
                p.smooth();
                let time = p.millis();
                p.background(255, 0);            
                p.rotateY(time / 30 % 2000 / 800)
                p.translate(-20, -20)
                p.scale(0.35);
                p.image(c, -340, -30);
                p.image(o3, -200, -30);
                p.image(l, -80, -30);
                p.image(l2, 30, -30);
                p.image(a, 140, -30);
                p.image(b, 260, -30);
                p.image(o3, 390, -30);             
                p.image(s, -350, 130);
                p.image(t, -220, 130);
                p.image(u, -80, 130);
                p.image(d, 40, 130);
                p.image(o3, 210, 130);
                p.image(i, 130, 130);


                p.ambientLight(0, 255, 30);

                for (let i = 0; i < 10; i++) {
                    p.translate(-200, 32);
                    p.rotateY(1000);
                    p.ambientMaterial(250);
                    p.sphere(time / 30 % 2000 / 800 + 3 * i, 27, 27);
                }
            }
        }
    }
    
    render() {
        return (
            <div id="Inicio" >
                <section ref={this.myRef} className="Inicio" >
        </section>
            </div>
        
        )
    }
}