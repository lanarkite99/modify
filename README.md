[(try it here)](https://lanarkite99.github.io/modify/)
# MODIfy
revolutionary new technology that turns any image into MODI


# How to use

**Use the ui at the top of the window to control the animation, choose between saved transformations, and generate new ones.** You can change the source image and target image, and choose how they are cropped to a square (tip: if both the images are faces, try making the eyes overlap). You can also change these advanced settings:
| Setting               | Description                                                                                     |
|-----------------------|-------------------------------------------------------------------------------------------------|
| resolution            | How many cells the images will be divided into. Higher resolution will capture more high frequency details. |
| proximity importance  | How much the algorithm changes the original image to make it look like the target image. Increase this if you want a more subtle transformation. |
| algorithm             | The algorithm used to calculate the assignment of each pixel. Optimal will find the mathematically optimal solution, but is extremely slow for high resolutions. |

# Running the project

### Native (desktop)
1. Install [Rust](https://www.rust-lang.org/tools/install)
2. Run `cargo run --release` in the project folder

### Web (local)
1. Install [Rust](https://www.rust-lang.org/tools/install)
2. Install the required target with `rustup target add wasm32-unknown-unknown`
3. Install Trunk with `cargo install --locked trunk`
4. Run `trunk serve --release --open`

### Deploying this website
Push to the `main` branch. The GitHub Pages workflow (`.github/workflows/gh_pages.yml`) will build and deploy the `dist` folder automatically.

# Contributing

Please open an issue or a pull request if you have any suggestions or find any bugs :)

# How it works

magic
