<template>
  <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="800px">
          <template v-slot:activator="{on}">
              <v-btn outlined color="teal lighten-3" dark v-on="on">Add new project</v-btn>
          </template>
          <v-card>
              <v-card-title>
                  <span class="headline">New Project</span>
              </v-card-title>
              <v-form class="px-3" ref="form">
                  <v-card-text>
                      <v-text-fiel label="title" v-model="title" prepend-icon="folder"></v-text-fiel>
                      <v-text-area label="Information" v-model="content" prepend-icon="edit"></v-text-area>
                      <v-col cols="12" lg="6">
                          <v-menu 
                            ref="menu1"
                            v-model="menu1"
                            :close-on-content-click="false"
                            transition="scale-transition"
                            offset-y
                            max-width="200px"
                            min-width="200px"   
                            >
                                <template v-slot:activator="{on}">
                                    <v-text-field
                                    v-model="dateformatted"
                                    label="Date"
                                    hint="MM/DD/YYYY format"
                                    prepend-icon="event"
                                    @blur="date =  parseDate(dateFormatted)"
                                    v-on="on"
                                    >
                                    </v-text-field>
                                </template>
                                <v-date-picker v-model="date" no-title @input="menu1 = false">

                                </v-date-picker>
                            </v-menu>
                      </v-col>
                  </v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                      <v-btn color="green" text outlined @click="submit">Save</v-btn>
                  </v-card-actions>
              </v-form>
          </v-card>
      </v-dialog>
  </v-row>
</template>

<script>
export default {
    name: 'Popup',
    data() {
        return {
            dialog: false,
            title: "",
            content: "",
            date: new Date().toDateString().substring(0, 30),
            dateFormatted
        }
    }
}
</script>

<style>

</style>