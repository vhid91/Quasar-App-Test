<template>
  <div class="q-pa-md" style="max-width: 400px; margin: auto;">
    <div class="q-pa-md">
      <q-input outlined v-model="musicObj.title" label="Song" />
      <q-input outlined v-model="musicObj.artist" label="Artist" />

      <div class="row justify-end">
        <q-btn
          type="submit"
          @click="submit()"
          label="SUBMIT"
          class="q-mt-md"
          color="teal"
          style="width: 100%;"
        >
          <template v-slot:loading>
            <q-spinner-facebook />
          </template>
        </q-btn>
      </div>
    </div>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="(song, index) in songs" :key="song.id">
        <q-item-section>
          <q-item-label>{{index}} : {{song.title}}</q-item-label>
          <q-item-label caption>{{song.artist}}</q-item-label>
        </q-item-section>
        <div style="display: flex">
          <q-btn @click="editMusic(song.id, song)">
            <q-icon name="edit" />
          </q-btn>
          <q-btn @click="isConfirm=true, id = song.id">
            <q-icon name="delete" />
          </q-btn>
        </div>
      </q-item>
    </q-list>
    <q-dialog v-model="isConfirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="music" color="primary" text-color="white" />
          <span class="q-ml-sm">Are you sure you want to delete song?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Confirm" color="primary" @click="deleteMusic()" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
export default {
  name: "PageIndex",
 created(){
      this.$bind("songs", this.$db.collection("songs"))
    },
  methods: {
    addMusic() {
      if (JSON.stringify(this.musicObj) == "{}") {
        alert("Please enter a music and artist");
      } else {
        // this.songs.push(this.musicObj);

        this.$db.collection("songs").add(this.musicObj)
        // this.$router.push("/login")
        this.clear()
      }
    },
    clear(){
      this.musicObj = {}
      this.isEditing = false
    },
    editMusic(id, song) {
      this.musicObj = {
        title : song.title,
        artist : song.artist
      }
      this.id = id
      this.isEditing = true;
    },
    updateMusic() {
      console.log(this.index, this.musicObj)
      this.songs[this.index] = this.musicObj;
      this.$db.collection("songs").doc(this.id).set(this.musicObj)
      this.clear()
    },
    deleteMusic() {
      // this.songs.splice(this.index, 1);
      console.log(this.id)
      this.$db.collection("songs").doc(this.id).delete()
      this.isConfirm = false;
    },
    submit() {
      !this.isEditing ? this.addMusic() : this.updateMusic();
    }
  },
  data() {
    return {
      musicObj: {},
      isEditing: false,
      isConfirm: false,
      id: "",
      alert: false,
      prompt: false,
      index: 0,
      address: "",
      songs: []
    };
  }
};
</script>
