# template-es6-gulp

## gulp plugin list

- gulp
	- gulp
	- gulp-plumber
	- require-dir

- sass
	- gulp-sass(+ node-sass)
	- gulp-autoprefixer

- javascript
	- gulp-babel
	- browserify
		- through2
		- vinyl-transform(❌)

---

### memo!

- memo
	- Task runner: gulp
	- Language: JavaScript(ECMAScript6)
	- (+_+;)

### gulpでの話

- scss
	- コンパイルはmain.scssのみでおけ。
	- 他はパーシャルで。

- babel
	- 全部ね。

- browserify
	- core.jsのみでおけ。
	- 他はrequierで入るんでいらん。

- ESlint
	- babelでコンパイルする前に走るよ。
	- jsx, arrowをtrueにしないと'=>'で怒られちゃう。

renamed

