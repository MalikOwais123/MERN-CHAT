const corsConfig = {
  credentials: true,
  origin: true,
  optionsSuccessStatus: 200,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  preflightContinue: false,
};

module.exports = corsConfig;
