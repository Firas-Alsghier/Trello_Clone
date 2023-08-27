<script setup lang="ts">
import { ref } from 'vue';
import { useToast } from 'primevue/usetoast';
import FileUpload from 'primevue/fileupload';
import { useGlobalStore } from '@/stores/global';
const store = useGlobalStore();
const toast = useToast();
const uploadedImage = ref('');
const onUpload = () => {
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

function userImage(img: any): void {
  const { objectURL } = img.files[0];
  console.log(objectURL);
  uploadedImage.value = objectURL;
  store.changeImgUrl(uploadedImage.value);
}
</script>

<template>
  <div class="img-upload mt-6 flex flex-col items-center">
    <FileUpload mode="basic" @select="userImage" @upload="onUpload" :multiple="false" name="demo[]" accept="image/*" :max-file-size="1000000" />
    <div class="show-img mt-6 w-full h-full" v-if="uploadedImage">
      <img :src="uploadedImage" alt="user-image" />
    </div>
  </div>
</template>

<style scoped></style>
