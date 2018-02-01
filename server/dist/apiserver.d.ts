declare class ApiServer {
    private env;
    private corsOptions;
    private appExpress;
    constructor();
    private mountRoutes();
    start(port: string): void;
}
export default ApiServer;
