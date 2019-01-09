/*
 *  jQuery Github - v0.2.5
 *  A jQuery plugin to display your Github Repositories.
 *  Copyright (c) 2013
 *  MIT License
 */
(function(e,t,n){function o(t,n){this.element=t,this.$container=e(t),this.repo=this.$container.attr("data-repo"),this.options=e.extend({},s,n),this._defaults=s,this._name=r,this.init()}var r="github",i=t.document,s={propertyName:"value"};o.prototype.init=function(){var n=this,r;t.sessionStorage&&(r=sessionStorage.getItem("gh-repos:"+this.repo)),r!==null?n.applyTemplate(JSON.parse(r)):e.ajax({url:"https://api.github.com/repos/"+this.repo,dataType:"jsonp",success:function(e){if(e.meta.status>=400&&e.data.message){console.warn(e.data.message);return}n.applyTemplate(e.data),t.sessionStorage&&sessionStorage.setItem("gh-repos:"+n.repo,JSON.stringify(e.data))}})},o.prototype.applyTemplate=function(t){var n=this,r=new Date(t.pushed_at),i=r.getDate()+"/"+(r.getMonth()+1)+"/"+r.getFullYear(),s=e(e.parseHTML('         <div class="github-box">              <div class="github-box-header">                 <h3>                     <a href="'+t.url.replace("api.","").replace("repos/","")+'">'+t.name+'</a>                 </h3>                 <div class="github-stats">                     <a class="repo-watchers" href="'+t.url.replace("api.","").replace("repos/","")+'/watchers">'+t.watchers+'</a>                     <a class="repo-forks" href="'+t.url.replace("api.","").replace("repos/","")+'/forks">'+t.forks+'</a>                 </div>             </div>             <div class="github-box-content">                 <p>'+t.description+' &mdash; <a href="'+t.url.replace("api.","").replace("repos/","")+'#readme">Read More</a></p>             </div>             <div class="github-box-download">                 <p class="repo-update">Latest commit to <strong>master</strong> on '+i+'</p>                 <a class="repo-download" href="'+t.url.replace("api.","").replace("repos/","")+'/zipball/master">Download as zip</a>             </div>         </div>       '));n.appendTemplate(s)},o.prototype.appendTemplate=function(e){var t=this;e.appendTo(t.$container)},e.fn[r]=function(t){return this.each(function(){e.data(this,"plugin_"+r)||e.data(this,"plugin_"+r,new o(this,t))})}})(jQuery,window);