$('nav a').on('click', function(e){
	e.preventDefault();
	$('nav li').removeClass('active');
	$(this).closest('li').addClass('active');
});

$('#addSeeker').on('click', function(e){
	$('body').addClass('modal-open');
	$('.add-seeker-modal').closest('.modalSubstrate').addClass('open');
});

$('.modalSubstrate').on('click', function(e){
	$(this).removeClass('open');
});

$('.modalSubstrate .modal').on('click', function(e){
	e.stopPropagation();
});



$('#modalClose').on('click', function(e){
	$('body').removeClass('modal-open');
	$(this).closest('.modalSubstrate').removeClass('open');
});

$('#cancelAdd').on('click', function(e){
	$('body').removeClass('modal-open');
	$(this).closest('.modalSubstrate').removeClass('open');
});



$('.button-file').on('click', function(){
	$(this).closest('.input-file').prev().trigger('click');
})

$('.form-control-group li label').on('click', function(){
	$(this).closest('ul').find('li').removeClass('active');
	$(this).closest('li').addClass('active');
})


FILE_TYPES = {
	"photo": 	['jpg', 'png'],
	"summary": 	['pdf', 'doc'],
	"archive": 	['zip', 'rar']
}

$('input[type=file]').on('change', function(e){
	console.log($(e.target).attr('data-type'))
	console.log(FILE_TYPES[$(e.target).attr('data-type')])
  let file = $(this)[0].files[0]; 
  let fileName = file.name.toLowerCase();

let matches = FILE_TYPES[$(e.target).attr('data-type')].some(function(it){  // проверка файлов на соответствие типу
  return fileName.endsWith(it);
})
  if(matches){
	    $(this).next().find('span').html(file.name);
	}
});