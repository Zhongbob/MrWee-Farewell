data =  """
1
Hello Mr wee I think you would make a good stand up comedian (sitting works too). Thank you for teaching us the work of geniuses with such enthusiasm I wish I had for physics.
2
hi mr wee thanks for being an amazing physics teacher i really enjoyed your lessons and all the best in your new school!!!
3
Thank you Mr Wee, for guiding us so far this year. The jokes you made in class were always a good wake up call and brought much laughter to class. Thank you for bringing us a whole new experience in physics lessons and good luck in your next school. Hopefully you’ll get a class you won’t have to call girls and boys ._.
4
Hello Mr Wee, thank you for being an amazing physics teacher and always being willing to deal with our shenanigans. Your lessons are always so funny but yet taught in a way that everybody can understand. I wish you all the best in your new school and pls don’t forget us TvT

p.s. don’t worry, i’ll disturb you via whatsapp to find out which school you’re teaching hehehe
5
hello mr wee 
6
hi mr wee, thanks for being an amazing physics teacher. you really made lessons very entertaining and made physics a fun subject to learn. i wish you all the best in your new school. please don't forget us 
7
thank you mr wee for being so entertaining and making lessons fun and interesting for us while helping us learn. you may not be a good physics teacher (your words not mine) but you were the best physics teacher i’ve had in RV! all the best in your mystery school sayonara
8
Hi Mr Wee, thank you for looking our for me and helping me in physics haha meeting me kinda last minute for consult and all :D Thanks to you I’ve become more confident in kinematics! >\/< Thank you and all the best in your new school!! 😀
9
Hello Mr Wee, thank you for being the best physics cher I ever had in my school life. They said "The best teachers are the ones who make the subject entertaining and fun.”, and they aren't wrong. Not only did you make class so lively and humorous, but we also got to learn and understand the complex topics easily, which is something I haven’t experienced in a long time. All the best in your new school!
10
Thanks for waking me up in class Mr Wee :D I think you are a bit overqualified to teach in RV, so wish you all the best in your new school! Really appreciate your style of teaching and how you make lessons so lively and understandable. 
11
Hello Mr Wee, thank you for entertaining most of my questions, both during normal physics class and physics talent class :D. It was a pleasure assisting you in by becoming your physics representative, where I definitely did an excellent job yes. I will continue enjoying physics even after you are gone with our new teacher. Thank you for your hard work, and all the best for your future! 
12
Hello Mr Wee, thank you for making funny jokes all the time. My personal favourite was the “spring constant” joke. Very original hahaha. All the best in your new school.
13
hello mr wee u are a very good physic teacher thank you for making physics less boring and wish you all the best for you future endevours :))
14
Hello Mr Wee, I would like to thank you for the wee time we spend together. You are a very interesting teacher and all your lame jokes in class always seem to wake me up and motivate me to continue studying physics! It means alot to have a teacher be so entertaining and inspiring at the same time :D Thanks for always taking the time to help us out and taking extra steps for us to truly understand and appreciate physics! You are amazing and KEEP UP THE GOOD WORK!! I will score well for you <3
15
Hi Mr Wee, thanks for being such a wonderful physics teacher. You never ceased to amaze me with how you can make complicated topics so easy to understand for me, considering and i quote you “my physics not so good”. Your lessons are also very entertaining and the jokes especially were what I enjoyed the most. Also, your singing is very very good. Thank you, and all the best in your new school.
16
Thank you Mr Wee for teaching us physics for the past semester, your lessons are always interesting and enjoyable. Wish you all the best in your next school!
17
Hi Mr Wee, thanks for teaching us physics and answering all of my questions. Although I missed some lessons, it was still very interesting to hear about all your stories when you teach us physics. ATB for your next school!
18
Thank you Mr Wee for sharing with us the stories of your powerful ex girlfriends and funny jokes. 祝你身体健康万事如意 Bye bye Mr Wee *Microwave* 👋🏻
19
Thanks Mr Wee for being such a great teacher! Ur singing is so nice HAHAHA. Thanks for always entertaining us in class and making our lessons fun with all your stories. Atb for ur future endeavours and hope u have fun in life.
20
Just wanted to say a big thank you! You turned the complicated stuff into something we could actually get. As you head off to new stuff, remember you've made a difference here. Good luck with whatever's next!
21
Hi Mr Wee, you give me the impression of the kind of humorous university lecturer that only exist in movies. I really enjoys our lesson and I sincerely thank you for giving me an amazing introduction to H2 physics. 
ps. Sorry I occasionally sleep in your lesson, the lesson just so happens to always be in early morning 🙏
"""

namelist = """
1
CARISSA LIEW HUI WEN
2
DAPHNE CHIA MIN HUI
3
GOH ROU HUI ASHLEY
4
NG SHI QING, EUGENIA
5
SELINA THEN SHI MIIN
6
TOH YUEN HUI
7
YEO SU GAR
8
ZHANG HUIXIN
9
CHEE JUN HAN ISSAC
10
CHEW JIN HAO
11
CHUA ZHONG DING
12
DYLAN ZIHONG SAGA
13
FOO CHUAN YUAN
14
HONG WENQI
15
LEONG NGAI KIT
16
MAH KIAN SIONG JERALD
17
NICHOLAS NG YI JIE
18
SHI YU XIANG
19
TAN IK KAI AYDEN
20
TAN YI JUN
21
WANG TING AN
"""

namelist = namelist.strip().split("\n")
namelist = dict(map(lambda idx,name:[idx,name],namelist[::2],namelist[1::2]))
data = data.strip().split("\n")
newdata = []
prevIdx = None 
prevDesc = ""
for i in data:
    if i.isdigit():
        if prevIdx !=None: newdata.append({"title":namelist[prevIdx],"desc":prevDesc.strip()})
        prevIdx = i 
        prevDesc = ""
    else:
        prevDesc+=i+"\n"
newdata.append({"title":namelist[prevIdx],"desc":prevDesc.strip()})
   
for i in newdata: print(str(i)+",")