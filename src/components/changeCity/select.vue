<template>
  <div class="choose-wrap">
    <div :class="['choose',  disabled?'cityDisable':'']" @click="showSelectionBox" v-document-click="documentClick">
      <span>{{value}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div class="mt-content" v-show="showActive">
        <h2>{{select.title}}</h2>
        <div class="wrapper">
          <dl class="col" v-for="(item, index) in renderList" :key="index">
            <dd
              :class="{'mt-item': true, 'active': setActive == i.name}"
              v-for="(v,i) in item"
              :key="v.name"
              @click.stop="chooseOne(v)"
            >{{v.name}}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["select", "showActive", "value", "disabled"],
  data() {
    return {
      setActive: "",
    };
  },
  computed : {
    renderList () {
      var column = Math.ceil(this.select.list.length/12)
      var renderList = []
      for (var i = 0; i < column; i++) {
        let list = this.select.list.slice(i * 12, i * 12 + 12)
        renderList.push(list)
      }
      return renderList
    }
  },
  methods: {
    showSelectionBox(e) {
      e.stopPropagation();
      if(!this.disabled) {
        this.$emit("change_select", true);
      }
    },
    documentClick() {
      this.$emit("change_select", false);
    },
    chooseOne(item) {
      this.setActive = item;
      this.$emit("change",item);
      this.documentClick();
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
</style>