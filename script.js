var page
var plus;
var current = 0
var act = ['act1','act2','act3','act4','act5','act6','act7','act8','act9']
var act_info = ['ได้รับรางวัลรองชนะเลิศอันดับ 3 จากการแข่งขันตอบปัญหาวิชาการ ACADEMIC WAR สงครามแห่งปัญญา ครั้งที่ 3 จัดโดย T-CASter ร่วมกับนิสิตจามหาวิทยาลัยจุฬาลงกรณ์ ในรายวิชา คอมพิวเตอร์',
'เข้าร่วมโครงการ DRONE STEM จัดโดย GISTNU และ GISTNEXT ณ มหาวิทยาลัยนเรศวร โดยภายในโครงการมีการบูรณาการความรู้ ทางเทคโนโลยีอากาศยานไร้คนขับ (UAV) ร่วมกับทักษะการเขียนโค้ด',
'รับหน้าที่เป็นสตาฟในกิจกรรมค่ายพัฒนาทักษะคอมพิวเตอร์และเทคโนโลยีเพื่อช่วยสอนเพื่อนๆในการเขียนคำสั่งควบคุมหุ่นยนต์แบบพื้นฐาน',
'เข้าร่วมการแข่งขันศิลปหัตถกรรมในรายการสร้างเกมสร้างสรรค์และได้รับรางวัลรองชนะเลิศอันดับหนึ่ง',
'เข้าร่วมการแข่งขัน Thailand Online Competitive Programming Contest 2021 จัดโดยกลุ่มอดีตนักเรียน ค่ายโอลิมปิกวิชาการคอมพิวเตอร์',
'ออกแบบโปสเตอร์สำหรับโพสประชาสัมพันธ์กิจกรรมต่างๆบนเพจสภานักเรียนตามหน้าที่ฝ่ายประชาสัมพันธ์',
'ได้รับเลือกให้เป็นโรงเรียนต้นแบบสภานักเรียนระดับประเทศ มอบโอกาสให้ผมได้พัฒนาตัวเองทั้งการทำงานเป็นทีมร่วมกับเพื่อนๆ ทักษะการแก้ปัญหาทักษะการนำเสนอ และ ฝึกความกล้าแสดงออกของผมอีกด้วย',
'เป็นพิธีกรหลักในกิจกรรมกล่าวอำลาท่านผู้อำนวยการดร.มนตรี คงเจริญ ได้ฝึกทักษะการสื่อสาร และ การพูดต่อหน้าสาธารณะ',
'เข้าร่วมเป็นสตาฟจัดกิจกรรมนันทนาการและเป็นช่างภาพในกิจกรรมการประชุมแลกเปลี่ยนเรียนรู้พัฒนาศักยภาพผู้บริหารครูและนักเรียน'
]
function change_pic(plus) {
    current = current + plus
    if(current<0){
        current = 8
    }
    else if(current==8){
        current = 0
    }
    var url = "url('act/"+act[current]+".jpg')"
    document.getElementsByClassName('showcase')[0].style.backgroundImage = url
    document.getElementsByClassName('showcase_text')[0].innerHTML = act_info[current];

}
function scroll_to(page){
    document.getElementById(page).scrollIntoView();
}