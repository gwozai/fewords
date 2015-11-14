rm -rf ../fewords-build
fis3 release -d ../fewords-build
cp -ap node_modules ../fewords-build/
cd ../fewords-build
npm run build
