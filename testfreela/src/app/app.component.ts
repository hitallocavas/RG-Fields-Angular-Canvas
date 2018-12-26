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
    
    var valor = 2;
    ctx.font = "10px Arial";
    
      var imageObj= new Image();
      
      imageObj.onload = ()=>{
      
        ctx.drawImage(imageObj, 10, 0);
        ctx.fillText("Hitallo Silva", 80, 62);
        valor = valor + 210;
        ctx.drawImage(imageObj, 10, valor);
        ctx.fillText("Allan Borges", 80, 62 + valor);
        valor = valor + 210;
        ctx.drawImage(imageObj, 10, valor);
        ctx.fillText("Danilo Farias", 80, 62 + valor);
        valor = valor + 210;
        ctx.drawImage(imageObj, 10, valor);
        ctx.fillText("Magdala Novaes", 80, 62 + valor);

      } 

      imageObj.src = './../assets/cnh.png';
    console.log(imageObj);
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
