<!--热门城市集合-->
<template>
  <div>
    <h3 class="text-center" style="margin-top: 15px;">热门景点</h3>
    <div class="row" v-for="(item, index) in scenic" v-bind:key="index">
      <div class="col-md-1" style="padding-top: 0.75rem;">{{ item.city }}</div>
      <div class="col-md-10">
        <table class="table table-borderless">
          <tbody>
            <tr v-for="(vi, index) in item.views" v-bind:key="index">
              <td v-for="(td, index) in vi.tr" v-bind:key="index">
                <a :href="td.url">{{ td.view }}</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scenic: [
        {
          city: "陕西省",
          views: [
            {
              tr: [
                {
                  view: "兵马俑",
                  url: "#",
                },
                {
                  view: "华清池",
                  url: "#",
                },
                {
                  view: "大唐芙蓉园",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
              ],
            },
            {
              tr: [
                {
                  view: "兵马俑",
                  url: "#",
                },
                {
                  view: "华清池",
                  url: "#",
                },
                {
                  view: "大唐芙蓉园",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          city: "陕西省",
          views: [
            {
              tr: [
                {
                  view: "兵马俑",
                  url: "#",
                },
                {
                  view: "华清池",
                  url: "#",
                },
                {
                  view: "大唐芙蓉园",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
              ],
            },
            {
              tr: [
                {
                  view: "兵马俑",
                  url: "#",
                },
                {
                  view: "华清池",
                  url: "#",
                },
                {
                  view: "大唐芙蓉园",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          city: "陕西省",
          views: [
            {
              tr: [
                {
                  view: "兵马俑",
                  url: "#",
                },
                {
                  view: "华清池",
                  url: "#",
                },
                {
                  view: "大唐芙蓉园",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
              ],
            },
            {
              tr: [
                {
                  view: "兵马俑",
                  url: "#",
                },
                {
                  view: "华清池",
                  url: "#",
                },
                {
                  view: "大唐芙蓉园",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
                {
                  view: "大雁塔",
                  url: "#",
                },
                {
                  view: "回民街",
                  url: "#",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
tbody a {
  color: darkgrey;
  font-size: 14px;
}
tbody a:hover {
  text-decoration: none;
}
</style>
