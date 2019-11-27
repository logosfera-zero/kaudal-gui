<template>
    <v-app id="inspire">
        <v-content>
            <v-container
                    class="fill-height"
                    fluid
            >
                <v-row
                        align="center"
                        justify="center"
                >
                    <v-col
                            cols="12"
                            sm="8"
                            md="4"
                    >
                        <v-card class="elevation-12">
                            <v-toolbar
                                    color="primary"
                                    dark
                                    flat
                            >
                                <v-toolbar-title>Login form</v-toolbar-title>
                                <v-spacer />
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn
                                                :href="source"
                                                icon
                                                large
                                                target="_blank"
                                                v-on="on"
                                        >
                                            <v-icon>mdi-code-tags</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Source</span>
                                </v-tooltip>

                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                            v-model="username"
                                            label="Login"
                                            name="login"
                                            prepend-icon="person"
                                            type="text"
                                    />

                                    <v-text-field
                                            v-model="secreto"
                                            id="password"
                                            label="Password"
                                            name="password"
                                            prepend-icon="lock"
                                            type="password"
                                    />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn color="primary" v-on:click="getTokenfromCredential({username,secreto})">Login</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>

    import {mapActions, mapGetters} from "vuex";

    export default {
        props: {
            source: String,

        },

        data: function () {
            return {
                username: "",
                secreto: ""

            }
        },

        methods: {
            ...mapActions("auth",['getTokenfromCredential'])




            },
        computed: {
            ...mapGetters("auth",['isLoggedThisSession'])
        }

    }
</script>