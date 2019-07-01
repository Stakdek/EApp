# EApp
Base Electron App

# Target
I would like to have an electron environment with just a few clicks. This environment can then be used for your own ElectronJS project.

# Using
* `make prep` install all dependicies into this enviroment
    * `npm` is required
    * >Ubuntu 18 is recommended
* `make run` start the Electron app in debug mode
* `make dist` compiles executable for Windows and makes an Debian package

# Other Dependicies
To include other dependencies or programs, you can move them to the "prog" directory. For compiled executables this folder is included and unpacked.
