import { Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myCanvas') myCanvas: ElementRef;
  @ViewChild('cnh') cnh: ElementRef;
  public ctx: CanvasRenderingContext2D;
  title = 'testfreela';

  ngAfterViewInit(): void {
    var ctx = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    
    
    var valor = 0;
    ctx.font = "10px Arial";
    
      var imageObj= new Image();
      
      imageObj.onload = ()=>{
      
        ctx.drawImage(imageObj, 10, 0, 741, 257);
        ctx.fillText("Hitallo Silva", 180, 105);
        valor = valor + 257 + 8;
        ctx.drawImage(imageObj, 10, valor, 741, 257);
        ctx.fillText("Allan Borges", 180, 105 + valor);
        valor = valor + 257+8;
        ctx.drawImage(imageObj, 10, valor, 741, 257);
        ctx.fillText("Danilo Farias", 180, 105 + valor);
        valor = valor + 257 + 8;
        ctx.drawImage(imageObj, 10, valor, 741, 257);
        ctx.fillText("Magdala Novaes", 180, 105 + valor);
        this.desenharPolegares(ctx,257+8)

      } 

      imageObj.src = './../assets/cnh.png';

    
  }

  private desenharPolegares(ctx,valor):void{
    let polegar = new Image();
    polegar.onload = () => {
      ctx.drawImage(polegar, 650, 110, 65,90);
      ctx.drawImage(polegar, 650, 110 + valor, 65,90);
      ctx.drawImage(polegar, 650, 110 + valor*2, 65,90);
      ctx.drawImage(polegar, 650, 110 + valor*3, 65,90);
    }
    polegar.src = './../assets/polegar.jpg';
  }

  private imprimir(){
    const dataUrl = <HTMLCanvasElement>this.myCanvas.nativeElement.toDataURL(); 

    let windowContent = '<!DOCTYPE html>';
    windowContent += '<html>';
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>';
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';

    const printWin = window.open('', '', 'width=' + screen.availWidth + ',height=' + screen.availHeight);
    printWin.document.open();
    printWin.document.write(windowContent); 

    printWin.document.addEventListener('load', function() {
        printWin.focus();
        printWin.print();
        printWin.document.close();
        printWin.close();            
    }, true);
  }


}
