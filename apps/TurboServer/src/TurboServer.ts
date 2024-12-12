export class TurboServer{
  private webSocketServer: any;
   toggle= false;

  schema = {
    symbol: "string",
    bid: "float",
    ask: "float",
  };

    constructor(private perspective: any){
        console.log('TurboServer constructor');
    }

    async start(){
        this.webSocketServer = new this.perspective.WebSocketServer();
        const t = await this.perspective.table(this.schema,{ index: "symbol" });
        const v = await t.view();
        const json = await v.to_json();
        console.log(json);

        setInterval(async () => {

          if (this.toggle) {
            t.update([{ symbol: 'AAPL', "bid": 101, "ask": 100 }]);
          } else {
            t.update([{ symbol: 'AAPL', "bid": 100, "ask": 101}]);
          }
          this.toggle = !this.toggle;
          const json = await v.to_json();
          console.log(json);

        }, 1000);
    }
}
