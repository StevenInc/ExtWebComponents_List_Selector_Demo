/*global Ext*/
//note: Ext Web Component self register with VueJS
import Vue from 'vue'
import App from './App.vue'
import '@sencha/ext-web-components/lib/ext-grid.component';
import '@sencha/ext-web-components/lib/ext-toolbar.component';
import '@sencha/ext-web-components/lib/ext-searchfield.component';
import '@sencha/ext-web-components/lib/ext-column.component';
import '@sencha/ext-web-components/lib/ext-list.component';
import '@sencha/ext-web-components/lib/ext-formpanel.component';
import '@sencha/ext-web-components/lib/ext-textfield.component';
import '@sencha/ext-web-components/lib/ext-fieldset.component';





Ext.onReady(function() {
  new Vue({
    render: h => h(App)
  }).$mount('#app')
});
