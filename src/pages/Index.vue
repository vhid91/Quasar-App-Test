<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label>Memories</q-item-label>
          <q-item-label caption>by Maroon 5</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data: [
    'Memories by Maroon 5',
    'Pay Phone by Maroon 5',
    'Girl Like by Maroon 5',
    'Lost Stars by Maroon 5',
    'Memories by Maroon 5',
    'Memories by Maroon 5',
  ]
}
</script>
