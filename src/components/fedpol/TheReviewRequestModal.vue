<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>Review Request</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the request details below</p>
    </template>

    <el-descriptions v-if="selectedRequest !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type" :span="2">{{ selectedRequest.type }}</el-descriptions-item>
      <el-descriptions-item label="Requester">{{ selectedRequest.requester }}</el-descriptions-item>
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
        Cancel
      </el-button>

      <el-divider direction="vertical" class="menu-divider"/>
      
      <el-button 
        type="primary"
        plain 
        @click="openIssueConfirmBox"
      >
        Issue
      </el-button>
      <el-button 
        type="danger"
        plain 
        @click="openRejectConfirmBox"
      >
        Reject
      </el-button>
    </template>

  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, computed, watch, markRaw } from 'vue'
import { Key, SuccessFilled } from '@element-plus/icons-vue'
import { ElNotification, ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'
import { requestTagType } from '@/components/helpers/tags';

const store = useStore()
const namespace = 'fedpol'
const selectedRequest = computed(() => store.getters[`${namespace}/requests/selectedRequest`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/requests/isReviewRequestModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})

function closeModal(){
  store.dispatch(`${namespace}/requests/closeReviewRequestModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
function openIssueConfirmBox(){
  ElMessageBox.confirm(
    'Your signature is being requested. Continue?',
    'Signature request',
    {
      confirmButtonText: 'Sign',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Key),
    }
  )
  .then(() => {
    store.dispatch(`${namespace}/requests/issueSelectedRequest`)

    ElNotification({
      message: 'Request issued successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-left',
      duration: 3000
    })
    closeModal()
  })
}
function openRejectConfirmBox(){
  ElMessageBox.confirm(
    'Your signature is being requested. Continue?',
    'Signature request',
    {
      confirmButtonText: 'Sign',
      cancelButtonText: 'Cancel',
      type: 'warning',
      icon: markRaw(Key),
    }
  )
  .then(() => {
    store.dispatch(`${namespace}/requests/rejectSelectedRequest`)

    ElNotification({
      message: 'Request rejected successfully',
      icon: markRaw(SuccessFilled),
      position: 'top-left',
      duration: 3000
    })
    closeModal()
  })
}
</script>

<style scoped>
.menu-divider {
  margin: 0px 10px;
}
</style>