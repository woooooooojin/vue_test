<template>
  <div class="message_container">
    <div class="message_menu">
      
      <div class="message_left"></div>
      
      <div class="message_right">
        <ul>
          <li>메시지 전송</li>
          <li>발신번호 관리</li>
          <li>주소록 관리</li>
          <li>발송결과</li>
        </ul>
      </div>

    </div><!--message_menu-->
  </div><!--container-->

  <div class="container_gray">
    <div class="message_inner">
      <p class="message_tit">
        메시지 전송
      </p>

      <div class="category_box">
        <div class="cate_box">문자 메시지</div>
        <div class="cate_box">알림톡 (카카오)</div>
        <div class="cate_box">친구톡 (카카오)</div>
      </div>

      <div class="sub_text">
        <ul>
          <li>간편하게 한 화면에서 단문, 장문, 포토메세지를 발송할 수 있습니다.</li>
          <li>90byte 초과 시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이 가능합니다.</li>
        </ul>
      </div>

      <div class="line"></div>

      <div class="input_box">
        <div class="input_left">
          <div class="input_tit">수신번호</div>

          <div class="add_input">
            <input type="text" placeholder="휴대폰번호 (숫자만입력)">
            <button class="add_btn">+ 추가</button>
          </div>

          <div class="tel_box">
            <div class="tel_add">
              <p class="tel_desc">번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요.<br>최대 1만 건까지 붙여넣기 가능합니다.</p>

              <p class="total_cnt">총 0명</p>
              <p class="all_del">모두삭제</p>
            </div>
          </div>

          <div class="icon_box_cont">
            <div class="icon_box">
              <img src="../assets/img/user.png" alt="img">
              <p>주소록 불러오기</p>
            </div>

             <div class="icon_box">
              <img src="../assets/img/file.png" alt="img">
              <p>파일 불러오기</p>
            </div>

             <div class="icon_box">
              <img src="../assets/img/time.png" alt="img">
              <p>최근 전송 내역</p>
            </div>
           
          </div>

          <div class="line"></div>

          <div class="from_box">
            <div class="from_tit">발신번호</div>

            <div class="from_num_box">
              <p>전송할 발신번호 선택</p>
              <img src="../assets/img/arrow_bottom.png" alt="img">
            </div>
          </div><!--from box-->

          <div class="line"></div>

          <div class="message_typing">
            <div class="typing_tit">메세지 입력</div>

            <div class="typing_box">
              <input type="text" placeholder="제목을 입력해주세요. (단문 SMS는 제외, 최대 30byte)">

              <div class="typing_desc">
                <p>단문 SMS</p>
                <p><span>0</span> /90byte <img src="../assets/img/refresh.png" alt="img"></p>
              </div>

              <div class="typing_text">
                <p>내용을 입력해 주세요. 90byte 초과 시 장문 문자로,<br>이미지 추가시 포토 문자로 자동 전환 됩니다.</p> 
                
                <div class="typing_opt">
                  <ul>
                    <li>치환코드</li>
                    <li>템플릿</li>
                    <li>문자도구</li>
                  </ul>
                </div>
              </div>


              <div class="advertise_btn">
                <div class="ad_tit">광고성 문자(080 수신거부번호 포함)</div>
                <div class="toggle_btn">
                  <img src="../assets/img/toggle.png" alt="img">
                </div>
              </div>


              <div class="add_img">
                <div class="add_img_tit">이미지 추가</div>
                <div class="img_btn">
                  <img src="../assets/img/plus.png" alt="img">
                </div>
                <div class="add_img_desc">
                  <ul>
                    <li>이미지는 최대 3장까지 첨부 가능합니다.</li>
                    <li>이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</li>
                  </ul>
                </div>
              </div>


            </div><!--typing box-->

          </div> <!--message box-->


        </div><!--input left-->
        
        <div class="input_right">
          
          <div class="phone_screen">
            <span>〈</span>
          </div>
        
        </div><!--input right-->
      </div><!--input box-->

      <div class="line"></div>

      <div class="send_tit">발송 설정</div>
      <div class="send_opt">
        <div class="send_opt_left">

          <div class="send_opt_box">
            <img src="../assets/img/check01.png" alt="img">
            <p>즉시 발송</p>
          </div>

          <div class="send_opt_box">
            <img src="../assets/img/check_02.png" alt="img">
            <p>예약 발송</p>
          </div>

        </div><!--left-->
        <div class="send_opt_right"></div>
      </div><!--send opt-->

      <div class="line"></div>

      <button class="submit_btn">발송하기</button>

    </div><!--inner-->
  </div><!--container-->
</template>

<script>
export default {
  name : 'MessagePage',
  components:{},
}
</script>

<style>

</style>