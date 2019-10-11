<template>
  <div>
    <el-button type="text" @click="open">点击打开 Dialog</el-button>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="close">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import visiable from "./visiable";
import mixin from "./visiable";
export default {
  mixins: [visiable],
  data() {
    return {
      //   dialogVisible: false
    };
  },
  methods: {
    // open() {
    //   this.dialogVisible = true;
    // },
    // close() {
    //   this.dialogVisible = false;
    // },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    }
  }
};
</script>


<style>
</style>