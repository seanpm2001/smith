void 0===Craft.Smith&&(Craft.Smith={}),function(t){Craft.Smith.Init=Garnish.Base.extend({init:function(e){Garnish.requestAnimationFrame(t.proxy((function(){for(var e=Garnish.$doc.find(".matrix-field"),a=0;a<e.length;a++)for(var i=t(e[a]),n=i.find("> .blocks > .matrixblock"),s=0;s<n.length;s++){var o=t(n[s]),r,l=o.find(".actions .settings.menubtn").data("menubtn")||!1;if(!l)return;new Craft.Smith.Menu(i,o,n,l)}Garnish.on(Craft.MatrixInput,"blockAdded",t.proxy(this,"blockAdded")),Craft.SuperTable&&Craft.SuperTable.MatrixInputAlt&&Garnish.on(Craft.SuperTable.MatrixInputAlt,"blockAdded",t.proxy(this,"blockAdded"))}),this))},blockAdded:function(e){Garnish.requestAnimationFrame(t.proxy((function(){var a=e.target.$container,i=a.find("> .blocks > .matrixblock"),n=t(e.$block),s,o=n.find(".actions .settings.menubtn").data("menubtn")||!1;o?new Craft.Smith.Menu(a,n,i,o):this.blockAdded(e)}),this))}}),Craft.Smith.Menu=Garnish.Base.extend({init:function(e,a,i,n){this.$matrixField=e,this.$matrixBlock=a,this.$matrixBlocks=i,this.menuBtn=n,this.menu=n.menu;var s=this.menu.$container.find('a[data-action="delete"]').parents("li");this.$copyBtn=t('<a data-icon="copy" data-action="copy">'+Craft.t("app","Copy")+"</a>"),this.$pasteBtn=t('<a data-icon="paste" data-action="paste">'+Craft.t("app","Paste")+"</a>"),this.$cloneBtn=t('<a data-icon="clone" data-action="clone">'+Craft.t("app","Clone")+"</a>"),this.$copyBtn.insertBefore(s).wrap("<li/>"),this.$pasteBtn.insertBefore(s).wrap("<li/>"),this.$cloneBtn.insertBefore(s).wrap("<li/>"),t('<hr class="padded">').insertBefore(s),this.menu.addOptions(this.$copyBtn),this.menu.addOptions(this.$pasteBtn),this.menu.addOptions(this.$cloneBtn),this.menu.on("optionselect",t.proxy(this,"onOptionSelect")),this.menu.on("show",t.proxy(this,"onMenuShow")),this.checkPaste()},onMenuShow:function(t){this.checkPaste()},onOptionSelect:function(e){var a=t(e.selectedOption);a.hasClass("disabled")||a.hasClass("sel")||("copy"==a.data("action")&&this.copyBlock(e),"paste"==a.data("action")&&this.pasteBlock(e),"clone"==a.data("action")&&this.cloneBlock(e))},checkPaste:function(){var t=!1;try{var e=JSON.parse(localStorage.getItem("smith:block")),a=this.$matrixField.attr("id");e&&a.includes("fields-"+e.field)&&(t=!0)}catch(t){}t?this.$pasteBtn.enable():this.$pasteBtn.disable()},copyBlock:function(t){var e=this._serializeBlocks();localStorage.setItem("smith:block",JSON.stringify(e));var a=e.blocks.length,i=1==a?"1 block copied":"{n} blocks copied";Craft.cp.displayNotice(Craft.t("app",i,{n:a})),this.checkPaste()},pasteBlock:function(e,a){try{if(!a)var a=JSON.parse(localStorage.getItem("smith:block"));var i=this.$matrixField.find(".blocks"),n=t('<div class="spinner smith-spinner"></div>').insertAfter(this.$matrixBlock),s=this.$matrixField.data("matrix"),o=null;this.$matrixBlocks.each(t.proxy((function(e,a){if(this.$matrixBlock.data("id")==t(a).data("id")){var i=this.$matrixBlocks[e+1];if(i)return o=t(i)}}),this)),a.placeholderKey=s.settings.placeholderKey,Craft.postActionRequest("smith/field/render-matrix-blocks",a,t.proxy((function(t,e){if("success"===e&&t.success)for(var a=0;a<t.blocks.length;a++){var i=t.blocks[a],r=s.blockTypesByHandle[i.typeHandle];s.blockTypesByHandle[i.typeHandle]=i;var l=s.addBlock(i.typeHandle,o);s.blockTypesByHandle[i.typeHandle]=r}n.remove()}),this))}catch(e){}},cloneBlock:function(t){var e=this._serializeBlocks();this.pasteBlock(t,e)},_serializeBlocks:function(){var e={field:"",namespace:"",blocks:[]},a=this.$matrixField.data("matrix"),i=a.blockSelect.$selectedItems;e.placeholderKey=a.settings.placeholderKey,i.length||(i=this.$matrixBlock);for(var n=0;n<i.length;n++){var s=t(i[n]),o=Garnish.getPostData(s),r,l;if(s.parents(".field").length>1){var c={};for(var d in o){console.log(d);var h=d.replace(/^fields.+?(fields])/gm,"fields");e.namespace=d.match(/^fields.+?(fields])/gm)[0],c[h]=o[d]}var p=Craft.expandPostArray(c)}else var p=Craft.expandPostArray(o);var f=p.fields;for(var m in f)for(var k in e.field=m,f[m].blocks){var u=f[m].blocks[k];e.blocks.push(u)}}return e}})}(jQuery);
//# sourceMappingURL=smith.js.map