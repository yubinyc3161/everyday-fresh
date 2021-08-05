<template>
  <div class="product-detail-container">
    <table>
      <thead>
        <td>id</td>
        <td>标题</td>
        <td>描述</td>
        <td>类目</td>
        <td>预售价格</td>
        <td>折扣价格</td>
        <td>标签</td>
        <td>限制购买数量</td>
        <td>上架状态</td>
        <td>操作</td>
      </thead>
      <tbody>
        <td>16</td>
        <td>老鼠雪花梨，五金装</td>
        <td>甜中带甜，清热解暑</td>
        <td>水果</td>
        <td>20</td>
        <td>18</td>
        <td>限时秒杀</td>
        <td>100</td>
        <td>上架</td>
        <td>
          <span>编辑</span>
          <span>删除</span>
        </td>
      </tbody>
      <tbody>
        <td>16</td>
        <td>老鼠雪花梨，五金装</td>
        <td>甜中带甜，清热解暑</td>
        <td>水果</td>
        <td>20</td>
        <td>18</td>
        <td>限时秒杀</td>
        <td>100</td>
        <td>上架</td>
        <td>
          <span><a-button type="primary"> 编辑 </a-button></span>
          <span><a-button type="primary"> 删除 </a-button></span>
        </td>
      </tbody>
      <tfoot></tfoot>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
table {
  width: 100%;
  margin: 0;
  text-align: center;
}
tbody:hover {
  background: #36cfc9;
}
</style>