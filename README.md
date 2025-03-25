before running (on server):
npm install node-fetch dotenv winston
npm install --save-dev jest




outline:
my-lightspeed-project/
├── .env                  # Contains your sensitive environment variables (do not commit this)
├── .env.example          # A sample env file listing required variables (without real secrets)
├── .gitignore            # Specifies files/folders to ignore (e.g., node_modules/, logs/, data/, .env)
├── package.json          # Node.js project configuration (dependencies, scripts, etc.)
├── package-lock.json     # Automatically generated file to lock dependency versions
├── README.md             # Documentation and instructions for your project
├── logs/                 # Folder for runtime log files (e.g., app.log, errors.log)
├── data/                 # Folder for exported or temporary data files (e.g., sales JSON/CSV)
└── src/                  # Main source code for your application
    ├── config/           # Configuration files
    │   └── env.mjs       # Loads the .env file (using dotenv) and exports constant variables
    ├── services/         # Contains business logic and external integrations
    │   └── lightspeed.mjs  # Functions for interacting with Lightspeed API (OAuth, fetching sales, etc.)
    ├── scripts/          # Standalone scripts that perform tasks (can be run manually or via cron)
    │   └── fetchAllSales.mjs  # Script to fetch sales data from Lightspeed and save it to the data/ folder
    ├── utils/            # Utility functions and helpers
    │   └── logger.mjs    # Logging setup using Winston
    └── tests/            # Automated tests for your code (optional but recommended)
        └── lightspeed.test.mjs  # Tests for the Lightspeed service functions

dotenv - reads key-value pairs and can set them as enviornment cariables https://www.bing.com/ck/a?!&&p=c3dae8c6e3b8fa4f40284490b3fc1156bc2af7a572b2bc7d5b39a37736be8c84JmltdHM9MTc0MjUxNTIwMA&ptn=3&ver=2&hsh=4&fclid=0401e12b-f3e2-6219-09aa-f4bdf7e260d3&psq=dotenv&u=a1aHR0cHM6Ly93d3cuZG90ZW52Lm9yZy9kb2NzLw&ntb=1
node fetch - figure this out later
winston - logging library for Node.js like errors and shit
