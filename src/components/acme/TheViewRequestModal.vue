<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View request</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the request details below</p>
    </template>

    <el-descriptions v-if="selectedRequest !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type" :span="2">{{ selectedRequest.type }}</el-descriptions-item>
      <el-descriptions-item label="Issuer">{{ selectedRequest.issuer }}</el-descriptions-item>
      <el-descriptions-item label="Status">
        <el-tag
          :type="requestTagType(selectedRequest.status)"
          :effect="'plain'"
          style="min-width: 90px; text-transform: capitalize;"
        >
          {{ selectedRequest.status }}
        </el-tag>
      </el-descriptions-item>
    </el-descriptions>
    
    <template #footer>
      <el-divider style="margin: 0px; margin-bottom: 15px; border: none;"/>
      <el-button
        @click="closeModal"
      >
        Close
      </el-button>
    </template>

  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import { requestTagType } from '@/components/helpers/tags'

const store = useStore()
const namespace = 'acme'
const selectedRequest = computed(() => store.getters[`${namespace}/requests/selectedRequest`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/requests/isViewRequestModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/requests/closeViewRequestModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
</script>