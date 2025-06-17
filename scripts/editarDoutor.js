 // Adicionar novo idioma
document.getElementById('addLanguage').addEventListener('click', function() {
    const newLanguageInput = document.getElementById('newLanguage');
    const language = newLanguageInput.value.trim();
    
    if (language) {
        const languagesContainer = document.querySelector('.languages-container');
        const languageTag = document.createElement('div');
        languageTag.className = 'language-tag';
        languageTag.innerHTML = `
            ${language}
            <button type="button" class="remove-language"><i class="fas fa-times"></i></button>
        `;
        languagesContainer.appendChild(languageTag);
        newLanguageInput.value = '';
        
        // Adicionar evento de remoção ao novo botão
        languageTag.querySelector('.remove-language').addEventListener('click', function() {
            languageTag.remove();
        });
    }
});

// Remover idioma existente
document.querySelectorAll('.remove-language').forEach(button => {
    button.addEventListener('click', function() {
        this.parentElement.remove();
    });
});

// Adicionar nova formação acadêmica
document.querySelector('.add-education').addEventListener('click', function() {
    const title = prompt('Título da formação (ex: Graduação, Especialização):');
    if (title) {
        const institution = prompt('Instituição:');
        if (institution) {
            const educationList = document.getElementById('educationList');
            const educationItem = document.createElement('div');
            educationItem.className = 'education-item';
            educationItem.innerHTML = `
                <h3>${title}</h3>
                <p>${institution}</p>
            `;
            educationList.appendChild(educationItem);
        }
    }
});

// Upload de foto (simulado)
document.querySelector('.photo-upload-btn').addEventListener('click', function() {
    alert('Funcionalidade de upload de foto seria implementada aqui');
});

// Remover foto
document.querySelector('.photo-remove-btn').addEventListener('click', function() {
    if (confirm('Deseja remover sua foto de perfil?')) {
        document.querySelector('.profile-photo').src = 'https://ui-avatars.com/api/?name=Vinicius+Almeida&background=3498db&color=fff&size=150';
    }
});

// Botão Cancelar
document.querySelector('.btn-cancel').addEventListener('click', function() {
    if (confirm('Todas as alterações não salvas serão perdidas. Deseja continuar?')) {
        window.location.href = '#';
    }
});

// Botão Salvar
document.querySelector('.btn-save').addEventListener('click', function() {
    // Aqui você implementaria a lógica para salvar no backend
    alert('Alterações salvas com sucesso!');
    // window.location.href = 'perfil.html';
});