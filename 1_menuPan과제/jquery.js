/*

요구사항

1. SELECT 메뉴를 클릭하면 그거에 맞게 주문내역에 추가
  (메뉴에 대한 중복성 제거..?)


2. 추가된 주문 내역에 삭제 버튼을 만들어 데이터 삭제
  (전체삭제버튼)


3. 주문하기를 눌러 최종 주문이 완료된 것을 확인

*/


$(function(){

	

	
	
/*	
	var list = $('#totallist').text();
	var n = 0;

	
	$('#menu1Count').click(function(){
		
		
		let one = $('#menu1Count option:selected').val()
		let result='';
		result += one;
		
	})
	list += '에스프레소' + $('#totallist').text($(this).val())
	
	
	let two = $('#menu2Count option:selected').text();
	list += two;
	
	$('#menu3Count').click(function(){
		list += $('#totallist').text($(this).val())
	})
	
	
	$('#menu1Count').click(function(){
		list += $('#totallist').text($(this).val())
	})
	
	$('#menu2Count').click(function(){
		list += $('#totallist').text($(this).val())
	})
	
	$('#menu3Count').click(function(){
		list += $('#totallist').text($(this).val())
	})
	
	// 안되는 코드... 000000이 나온다.
	// $('#totallist').text($('.menu select option:selected').text())
	
	
*/
	
	
	// 딱, select중에서 고른 숫자만 나오는 코드 1
//	$('.menu select').click(function(){
//		$('#totallist').text($(this).val())
//	})

	// 딱, select중에서 고른 숫자만 나오는 코드 2
//	$('.menuCount').click(function(){
//		$('#totallist').text($(this).val())
//	})		

	// 나오기는 하는데,, 메뉴 9개 이름, 가격 전부 나오는 코드
//	$('.menu select').click(function(){
//		$('#totallist').text($('.menu span').text())
//	})

// ----------------------------정성님 코드 받고---------------------
	
	
	
	
	// 총합을 계산할 변수 설정
	// 추가, 삭제할 때마다 변수가 갱신돼야하니까 밖에다가 선언해주었다.
	let finalPrice=0;
	
	
	// 요구사항 1.SELECT 메뉴를 클릭하면 그거에 맞게 주문내역에 추가
	
	// 각 메뉴의 select에서 갯수를 선택할 때마다 벌어지는 이벤트
	$('.menu select').change(function(){
		
		// 메뉴를 선택할 때,각각 메뉴의 이름, 가격, 주문량을 받는 변수 지정
		var menu = $(this).siblings('span:eq(0)').text();
		var price = $(this).siblings('span:eq(1)').text();
		var num = $(this).val();
		
		
		
		
//		목록에 기록하는 방법 1 		
//		변수를 지정하는 방법
//		목록에 기록할 변수 설정
//		var record='';
//		
//		record += "<tr>"; 
//		record += "<td>" + menu + "</td>"; 
//		record += "<td>" + num + "</td>"; 
//		record += "<td>" + num*price + "</td>"; 
//		record += "<td>" + 버어어어어ㅓ어트느느으느은 + "</td>"; 
//		record += "</tr>"; 
//				
//		$('#listTable').append(record);
		

		// 목록에 기록하는 방법 2
		// 변수를 지정하지 않고 바로 append에 전부 넣는 방법
		// 주의, append를 여러번 쓰면 안된다.
		$('#listTable').append('<tr>' + '<td>' + menu + '</td>' 
							  + '<td>' + num + '</td>' 
							  + '<td>' + num*price + '</td>'
							  + '<td>' + '<input type="button" id="delete" value="삭제" >' + '</td>' + '</tr>');
		
		
		// 목록에 기록하는 방법 3
//		$('<tr>' + '<td>' + menu + '</td>' 
//				  + '<td>' + num + '</td>' 
//				  + '<td>' + num*price + '</td>'
//				  + '<td>' + '<input type="button" id="delete" value="삭제" >' + '</td>' + '</tr>').appendTo('#listTable');
		
		
		
		
		// 총합에 대한 계산
		finalPrice += num*price;
		
		// 총합을 넣는 form - text 에 우리의 총합을 집어넣는다.
		// $('#total').attr('value',finalPrice);	// 된다.
		$('#total').val(finalPrice);				// 된다.
		// $('#total').text(finalPrice);			// 안된다.
		
		
	})
	
	
	
	
	// 요구사항 2. 추가된 주문 내역에 삭제 버튼을 만들어 데이터 삭제
	
	
//	$('#delete').click(function(){
//		$('#listTable').remove($(this).parents('<tr>'))
//		
//	})
	
	
	
	
	
	
	
	
	
	
//	
//	
//	// 정성님 감사..!
//	// 그림 크기에 대한 설정
//	$('.menu > img').css({
//		'width' : '100px',
//		'height' : '100px'
//	});
//
//	// select 할 때마다 동적으로 주문내역을 추가하기
//	let finalPrice = 0;
//
//	$('.menuCount').change(
//			function() {
////				value가 없을 때는 ''
////				' ' + price =?
////						
////						'' => 0으로 바꿔주고
////						거기다가 숫자를 더해주고 빼주던지;
//				$('#total').val(0);
//				let name = $(this).siblings('span:first').text();
//				let count = $(this).val();
//				let price = $(this).siblings('span:eq(1)').text();
//				let html = '';
//
//				finalPrice += count * price;
//
//				html += '<tr id = "newTable">';
//				html += '<td width="150">' + name + " " + count + " 개"
//						+ '</td>';
//				html += '<td width="100">' + price * count + "원" + '</td>';
//				html += '<td width="50">'
//						+ "<input type=button id='newButton' value='삭제'>"
//						+ '</td>';
//				html += '</tr>';
//
//				$('#listTable').append(html);
//				$('#total').attr('value', finalPrice);	
//
//			})
//
//	// 동적으로 생성된 삭제 버튼의 이벤트
//	$('#listTable').on('click', '#newButton', function() {
//
//		let par = $(this).parent();
//		let minusPrice = par.siblings('td:eq(1)').text().replace("원", "");
//		finalPrice -= parseInt(minusPrice);
//
//		par.siblings('td').remove();
//		par.remove();
//
//		// 총합 입력
//		$('#total').attr('value', finalPrice);
//	})
//
//	
//	// 주문에 대한 입력 값
//	$('#btn').click(function() {
//		alert("총 " + finalPrice + "원 결제 부탁드립니다.");
//	})
//

	
	
	//--------------------------------------------------------
	
//	
//	   // 그림 크기에 대한 설정
//	   $('.menu > img').css({'width':'100px','height':'100px'});
//	   
//	   // select 할 때마다 동적으로 주문내역을 추가하기
//	   let finalPrice = 0;
//	   
//	   $('.menuCount').change(function(){
//	      
//	      let name = $(this).siblings('span:first').text();
//	      let count = $(this).val() ;
//	      let price = $(this).siblings('span:eq(1)').text();
//	      let html = '';
//
//	      finalPrice += count*price;
//
//	      html += '<tr id = "newTable">';
//	      html += '<td width="150">'+name+ " " + count + " 개" + '</td>';
//	      html += '<td width="100">'+price*count +  "원" +'</td>';
//	      html += '<td width="50">'+"<input type=button id='newButton' value='삭제'>"+'</td>';
//	      html += '</tr>';
//	      
//	      $('#listTable').append(html);
//	      $('#total').attr('value',finalPrice);
//
//	   })
//	      
//	   // 동적으로 생성된 삭제 버튼의 이벤트
//	   $('#listTable').on('click','#newButton',function(){
//	         
//	         let par = $(this).parent();
//	         let minusPrice = par.siblings('td:eq(1)').text().replace("원","");
//	         finalPrice -= parseInt(minusPrice);
//
//	         par.siblings('td').remove();
//	         par.remove();
//	         
//	         // 총합 입력
//	         $('#total').attr('value',finalPrice);
//	      })
//	      
//	   // 주문에 대한 입력 값
//	   $('#btn').click(function(){
//	      alert("총 " + finalPrice+"원 결제 부탁드립니다.");
//	   })
//
	
	
	
})

