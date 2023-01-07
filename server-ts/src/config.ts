const isProd = process.env.NODE_ENV == 'production'
let appConfig = {
    isProd,
    isDev: !isProd,
    ClearDataBeforeLoad: isProd ? false:true,
    dbconnectinfo
}

export default appConfig
