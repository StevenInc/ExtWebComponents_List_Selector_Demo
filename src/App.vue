<template>
<div class="main-container">

    <div class="left-container">
      <ext-formpanel
        shadow="true"
        width="300"
    >
        <ext-fieldset title="Employees" margin="0 0 20 0">
            <ext-textfield
              labelAlign="placeholder"
              label="Search"
              required="false"
              v-on:change="doSearch($event)"
            >
            </ext-textfield>
        </ext-fieldset>
    </ext-formpanel>

      <ext-list
        shadow="true"
        scrollable="true"
        v-on:ready="onListReady($event)"
        v-on:childdoubletap="doDoubleTap($event)"
        height="450"
        width="300"
        layout="center"
      >
      </ext-list>

    </div>
    <div class="right-container">

        <ext-list
        shadow="true"
        scrollable="true"
        v-on:ready="onTargetListReady($event)"
        v-on:childdoubletap="undoSelection($event)"
        height="450"
        width="300"
        layout="center"
      >
      </ext-list>
    </div>
  </div>
</template>

<script>
  import HomeData from './HomeData.js';
  export default {
      name: 'Home',
      methods: {
      onListReady : function(event) {
          //set an id to the source list.
          this.listCmp = event.detail.cmp;
          const tpl =
              `<div>
                  <div style="font-size:16px;margin-bottom:5px;">{name}</div>
                  <div style="font-size:12px;color:#666;">{email}</div>
              </div>`;

          this.dataStore = Ext.create('Ext.data.Store', {
                fields: ['name', 'email'],
                data: HomeData,
              });

          this.listCmp.setItemTpl(tpl);
          this.listCmp.setStore(this.dataStore);
      },
      onTargetListReady: function(event){
          this.targetlistCmp = event.detail.cmp;
          const tpl =
              `<div>
                  <div style="font-size:16px;margin-bottom:5px;">{name}</div>
                  <div style="font-size:12px;color:#666;">{email}</div>
              </div>`;
          this.targetStore = Ext.create('Ext.data.Store', {
            fields: ['name', 'email']
          });
          this.targetlistCmp.setItemTpl(tpl);
          this.targetlistCmp.setStore(this.targetStore);
      },
      doDoubleTap: function(event){
        console.info("doDoubleTap: ", event);
        //remove the record from the first store.
        this.dataStore.remove(event.detail.location.record);
        //add to targetStore
        this.targetStore.add(event.detail.location.record);
        //this.targetlistCmp.setStore(this.targetStore);
      },
      undoSelection: function(event){
        this.targetStore.remove(event.detail.location.record);
        this.dataStore.add(event.detail.location.record);
      },
      initSearchBox: function(event){
        console.info("searchbox init:");
        this.searchbox = event.detail.cmp;
      },
      doSearch: function(event){
        console.info("doSearch", event.detail.newValue);
        let searchTerm = event.detail.newValue;
        this.dataStore.filter('name',searchTerm);
      }
    },//methods

  }
</script>

<style scoped>
  .main-container{
    height: 600px;
  }

  .left-container{
    width:315px;
    display: inline-block;
  }


  .right-container{
    width:315px;
    display: inline-block;
  }
</style>