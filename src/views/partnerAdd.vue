<template>
  <div class="inner shopCalc">
    <div class="contentsHead">
      <h3>파트너 등록</h3>
    </div>

    <div class="contentsBody">
      <dl>
        <dt>
          <h4>계정정보</h4>  
        </dt>
        <dd>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th>아이디</th>
              <td>
                <input type="text">
                <span>영어,숫자 조합 </span>
              </td>
            </tr>
            <tr>
              <th>비밀번호</th>
              <td>
                <input type="text" class="error-box">
                <span>영소문자, 대문자, 특수문자를 포함한 8자리 이상 </span>
              </td>
            </tr>
            <tr>
              <th>비밀번호 확인</th>
              <td>
                <input type="text">
                <span class="text-error">입력하신 비밀번호가 틀립니다</span>
              </td>
            </tr>
            <tr>
              <th>닉네임</th>
              <td>
                <input type="text">
                <span>아이디를 입력해주세요</span>
              </td>
            </tr>
            <tr>
              <th>상태메세지</th>
              <td>
                <textarea />
              </td>
            </tr>
          </table>
        </dd>
      </dl>

      <dl>
        <dt>
          <h4>파트너정보</h4>  
        </dt>
        <dd>
          <table cellspacing="0" cellpadding="0">
            <tr class="picture">
              <th>사진</th>
              <td>
                <div class="user-img">
                  <!-- <img src="https://picsum.photos/id/237/200/300"> -->
                </div>
                <v-btn outlined>사진등록</v-btn>
              </td>
            </tr>
            <tr>
              <th>이름</th>
              <td>
                <input type="text">
              </td>
            </tr>
            <tr>
              <th>전화번호</th>
              <td>
                <input type="text">
                <span>'-' 제외한 번호만</span>
              </td>
            </tr>
            <tr class="address">
              <th>사업자 주소지</th>
              <td>
                <div>
                  <input type="text">
                  <v-btn
                    outlined
                    height="30px"
                  >
                    주소검색
                  </v-btn>
                </div>
                <div style="margin-top:10px;">
                  <input type="text" style="margin-right:10px;max-width:400px;width:100%;">
                  <input type="text" style="width:100%;max-width:400px;">
                </div>
              </td>
            </tr>
            <tr class="bank">
              <th>은행</th>
              <td>
                <input type="text" style="width:150px" placeholder="은행명">
                <input type="text" style="margin-left:10px;" placeholder="계좌번호 입력">
                <span>'-' 제외한 번호만</span>
              </td>
            </tr>
          </table>
        </dd>
      </dl>

      <dl class="goods_selector">
        <dt>
          <h4>판매상품 선택</h4>  
        </dt>
        <dd>
          <table cellspacing="0" cellpadding="0">
            <tr>
              <th v-for="item in items" :key="item">
                {{item.cateName}}
              </th>
            </tr>
            <tr>
              <td v-for="item in items" :key="item">
                <ul>
                  <li v-for="goodsItem in item.goods" :key="goodsItem">
                    <input type="checkbox" checked>
                    <span>{{goodsItem.goodsName}}</span>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </dd>
      </dl>

      <div class="bottom">
        <v-btn
          outlined
          class="lastBtn"
          @click="$refs.reConfirm.open(true)"
        >
          등록완료
        </v-btn>
      </div>
    </div>

    <Message ref="reConfirm">
      <template slot="text">
        등록을 완료할까요?
      </template>
    </Message>

  </div> 
</template>

<script>

import Message from '../components/message'

export default {
  components:{
    Message
  },
  data: () => ({
    items:[
      {
        cateName:'생활빨래',
        goods:[
          {goodsName:'생활빨래80리터'}
        ],
      },
      {
        cateName:'의복',
        goods:[
          {goodsName:'와이셔츠'},
          {goodsName:'교복셔츠'},
          {goodsName:'남방,블라우스'},
          {goodsName:'티셔츠'},
        ],
      },
      {
        cateName:'침구류',
        goods:[
          {goodsName:'이불패드/커버'},
        ],
      },
      {
        cateName:'운동화류',
        goods:[
          {goodsName:'일반운동화'}
        ],
      },
    ]
  }),
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.contentsBody{
  dl{
    margin-bottom:50px;
    dt{margin-bottom:10px;}
  }
  table{
    width:100%;
    border-top: 1px solid #e2e2e2;;

    th{
      width:180px;
      border-bottom:1px solid #e2e2e2;
      min-height:50px;
      text-align:left;
      padding:10px;
      font-size:14px;
    }

    td{
      border-bottom:1px solid #e2e2e2;
      padding:10px;
      input{border:1px solid #aaa;height:30px;border-radius:4px;padding:0 5px;font-size:14px;}
      input.error-box{
        border:1px solid #d22828;
      }
      span{display:inline-block;margin-left:10px;font-size:12px;}
      span.text-error{color:#d22828}

      textarea{
        font-size:14px;
        width:100%;
        border:1px solid #aaa;
        border-radius:4px;
        min-height:100px;
        max-height:200px;
        padding:5px;
      }
      
    }
    tr.picture{
      .user-img{
        width:150px;
        height:150px;
        overflow:hidden;
        margin-bottom:15px;
        border-radius:4px;
        background:#f2f2f2;

        img{width:100%;}
      }
      .v-btn{
        height:30px;
        font-size:14px;
        letter-spacing: -0.4px;
        font-weight:normal;
        background: #292929;
        border:0px;
        color:#fff;
      }
    }

    tr.address{
      .v-btn{
        margin-left:10px;
        width:100px;
        font-size:14px;
        background: #292929;
        color:#fff;
        border:0px;
        font-weight:normal;
        letter-spacing: -0.4px;
      }
    }
  }

  dl.goods_selector{
    table{
      th{background:#f8f8f8;}
      td{border-right:1px solid #e2e2e2;vertical-align: top;}
      td:last-child{border-right:0px;}
    }
    ul{list-style: none;padding:0;margin:0}
    li{padding:0;margin:0;margin-bottom:5px;

      input{vertical-align: middle;width:15px;height:15px;}
      span{vertical-align: middle;font-size:14px;}
    }
  }

  .bottom{
    margin-bottom:50px;
    text-align: center;
    .lastBtn{width:200px;height:45px;background: #2816A7;color:#fff;}
  }
}
</style>
