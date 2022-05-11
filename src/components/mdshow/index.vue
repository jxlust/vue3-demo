<template>
  <div class="markdown-body" ref="mdRef"></div>
</template>

<script>
import { marked } from "marked";
import hljs from 'highlight.js';
import axios from "axios";

export default {
  data() {
    return {
      mdDataTest: `### 浏览器渲染原理和过程
[渲染原理](https://zhuanlan.zhihu.com/p/39879808)`,
    };
  },
  mounted() {
    // let rendererMD = new marked.Renderer();
    // marked.setOptions({
    // 	renderer: rendererMD,
    // 	gfm: true,
    // 	tables: true,
    // 	breaks: false,
    // 	pedantic: false,
    // 	sanitize: false,
    // 	smartLists: true,
    // 	smartypants: false,
    // }); //基本设置

    //    let htmlstr =  marked.parse(this.mdDataTest);
    //    console.log('htmlstr:',htmlstr);
    //    this.$el.innerHTML = htmlstr;
    const mdsrc = "./test.md";

    marked.setOptions({
      renderer: new marked.Renderer(),
      highlight: function(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : "plaintext";
        return hljs.highlight(code, { language }).value;
      },
      langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
      pedantic: false,
      gfm: true,
      breaks: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: false,
    });

    axios
      .get(mdsrc, {
        baseURL: "http://localhost:8010/",
      })
      .then((res) => {
        console.log("data jxl:", res.data);
        const htmlstr = marked.parse(res.data);
        console.log("htmlstr:", htmlstr);
        this.$el.innerHTML = htmlstr;
      });
  },
  methods: {},
};
</script>
<style lang="css">
@import "./github-md.css";
</style>
<style lang="css">
@import "./default.min.css";
</style>
