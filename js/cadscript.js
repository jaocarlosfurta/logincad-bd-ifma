document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form-cadastro');
    const senha = document.getElementById('senha');
    const confirmarSenha = document.getElementById('confirmar-senha');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (senha.value !== confirmarSenha.value) {
            alert('As senhas não coincidem!');
            senha.focus();
            return;
        }
        
       const tipoUsuario = document.querySelector('input[name="tipo-usuario"]:checked');
        if (!tipoUsuario) {
            alert('Por favor, selecione um tipo de usuário!');
            return;
        }
        
       alert('Cadastro realizado com sucesso!');
        form.reset();
    });

    const radioOptions = document.querySelectorAll('.radio-option');
    radioOptions.forEach(option => {
        option.addEventListener('click', function() {
            radioOptions.forEach(opt => opt.style.borderColor = '#e1e5e9');
            this.style.borderColor = '#4f6bed';
            this.style.background = '#f8f9ff';
        });
    });
});