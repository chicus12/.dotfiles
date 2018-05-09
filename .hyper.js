// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

module.exports = {
  config: {
    // default font size in pixels for all tabs
    fontSize: 18,

    // font family with optional fallbacks
    fontFamily: 'Fira Code, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(255,255,229,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'BEAM',

    // set to true for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#fff',

    // terminal background color
    backgroundColor: 'rgba(0, 40, 51, .7)',

    // border color (window, tabs)
    borderColor: '#839496',

    // custom css to embed in the main window
    css: `
      .header_header {
        background: rgb(0, 40, 51) !important;
      }
    `,

    // custom css to embed in the terminal window
    termCSS: `
      * {
        text-rendering: optimizeLegibility !important;
        font-weight: light;
      }

      .terminal {
        font-weight: lighter
      }
      .terminal .xterm-bold {
        font-weight: normal
      }
      .terminal {
        font-weight: lighter;
      }
      .terminal .xterm-bold {
        font-weight: normal;
      }
    `,

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#003541',
      red: '#dc322f',
      green: '#859901',
      yellow: '#b58901',
      blue: '#268bd2',
      magenta: '#d33682',
      cyan: '#2aa198',
      white: '#839496',
      lightBlack: '#003541',
      lightRed: '#dc322f',
      lightGreen: '#859901',
      lightYellow: '#b58901',
      lightBlue: '#268bd2',
      lightMagenta: '#d33682',
      lightCyan: '#2aa198',
      lightWhite: '#839496'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    // make sure to use a full path if the binary name doesn't work
    // (e.g `C:\\Windows\\System32\\bash.exe` instead of just `bash.exe`)
    // if you're using powershell, make sure to remove the `--login` below
    shell: '',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: false,

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false,

    hyperStatusLine: {
      dirtyColor: 'white',
      arrowsColor: 'green',
      footerTransparent: false,
      fontSize: 14
    },

    tabIcons: {
      mapIcons: {
        nodejs: ['node'],
        docker: ['docker-compose']
      },
      processNameRegex: {
        source: '([^\\s]+)',
        flags: '',
      }
    },

    hyperTabs: {
      trafficButtons: true,
      border: true,
      tabIconsColored: true,
    }
    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: [
    'hyper-statusline',
    'hyper-tab-icons',
    'hypercwd',
    'hyperlinks',
    'hyperterm-paste',
    'hyper-tabs-enhanced'
  ],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: []
};
