// tworzenie klasy Car
class Carts
{
    engine: string;

    constructor(engine: string)
    {
        this.engine = engine;
    }


    start()
    {
        alert("Engine started" + this.engine);
    }

    stop()
    {
        alert("Engine stoped" + this.engine); 
    }

}

window.onload = () =>
{
    var car = new Carts('V8');

    car.start();

    car.stop();
} 