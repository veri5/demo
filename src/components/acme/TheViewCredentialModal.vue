<template>
  <el-dialog
      v-model="showModel"
      :before-close="beforeClose"
      :width="'40%'"
    >
    <template #header>
      <strong>View credential</strong>
      <p style="font-size: var(--el-font-size-small);">Please find the credential details below</p>
    </template>

    <el-descriptions v-if="selectedCredential !== null"
      direction="vertical"
      :column="2"
      border
    >
      <el-descriptions-item label="Type" :span="2">{{ selectedCredential.type }}</el-descriptions-item>
      <el-descriptions-item label="Issuer" :span="2">{{ selectedCredential.issuer }}</el-descriptions-item>
      <el-descriptions-item label="Correct">
        <el-tag
          :type="correctTagType(selectedCredential.correct)"
          :effect="'plain'"
          style="min-width: 90px; text-transform: capitalize;"
        >
          {{ selectedCredential.correct }}
        </el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Valid">
        <el-tag
          :type="validTagType(selectedCredential.valid)"
          :effect="'plain'"
          style="min-width: 90px; text-transform: capitalize;"
        >
          {{ selectedCredential.valid }}
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
import { correctTagType, validTagType } from '@/components/helpers/tags'

const store = useStore()
const namespace = 'acme'
const selectedCredential = computed(() => store.getters[`${namespace}/credentials/selectedCredential`])

const showModel = ref(false)
const isViewModalVisible = computed(() => store.getters[`${namespace}/credentials/isViewCredentialModalVisible`])
watch(isViewModalVisible, (value) => {
  showModel.value = value
})
function closeModal(){
  store.dispatch(`${namespace}/credentials/closeViewCredentialModal`)
}
function beforeClose(done){
  closeModal()
  done()
}
</script>