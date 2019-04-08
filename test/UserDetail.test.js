import Vue from "vue";
import UserDetail from "../src/components/UserDetail.vue";

describe("UserDetail.test.js", () => {
    let cmp, vm;

    beforeEach(() => {
        cmp = Vue.extend(UserDetail); // Create a copy of the original component
        vm = new cmp({
            computed: {
                user() {
                    return [
                        {
                            id: 1,
                            name: "User_1",
                            detail: "Info 1"
                        },
                        {
                            id: 2,
                            name: "User_2",
                            detail: "Info 2"
                        },
                        {
                            id: 3,
                            name: "User_3",
                            detail: "Info 3"
                        }
                    ]
                }
            }
        }).$mount(); // Instances and mounts the component
    });

    it('equals messages to ["Cat"]', () => {
        expect(vm.user).toEqual([
            {
                id: 1,
                name: "User_1",
                detail: "Info 1"
            },
            {
                id: 2,
                name: "User_2",
                detail: "Info 2"
            },
            {
                id: 3,
                name: "User_3",
                detail: "Info 3"
            }
        ]);
    });
});
