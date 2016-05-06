
           $(document).ready(function() {
               
               dataDays = $('#idclock').data('days');
               dataHours = $('#idclock').data('hours');
               dataMinutes = $('#idclock').data('minuts');
               dataSec = $('#idclock').data('sec');
               var summ = 24*60*60*dataDays + 60*60*dataHours + 60*dataMinutes+dataSec;
               console.log(dataDays);
               console.log(dataHours);
               console.log(dataMinutes);
               console.log(dataSec);
               
               var clock;
                clock = $('.clock').FlipClock({
                    clockFace: 'DailyCounter',// вид счетчика (с количеством дней)
                    autoStart: false, //Отключаем автозапуск
                    countdown: true	, //Отсчет назад
                    language:'ru-ru', //поменять язык
                    callbacks: { //Действие после окончания отсчета
                    stop: function() {
                        $('.clock-stop').addClass("alert alert-danger");
                        $('.clock-stop').html('Время вышло!');
                        }
                       }
                    });

                    clock.setTime(summ); //Устанавливаем нужное время в секундах
                    clock.setCountdown(true); //Устанавливаем отсчет назад
                    clock.start(); //Запускаем отсчет
                });
        
