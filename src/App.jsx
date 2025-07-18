import './App.css'
import { useState } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Badge } from './components/ui/badge'
import { Dialog, DialogContent, DialogTrigger } from './components/ui/dialog'
import { CheckCircle, Users, TrendingUp, MessageSquare, Clock, Target, ArrowRight, Star, Phone, Mail, MapPin, X } from 'lucide-react'
import { motion } from 'framer-motion'

// Import das imagens
import healthcareAI from './assets/healthcare_ai_pt.jpg'
import salesAI from './assets/sales_ai_pt.jpg'
import customerServiceAI from './assets/customer_service_ai_pt.jpg'
import clinicMarketingProblems from './assets/clinic_marketing_problems_pt.jpg'
import healthcareTechnology from './assets/healthcare_technology_pt.jpg'
import primeiro from './assets/primeiro.jpeg'
import segundo from './assets/segundo.jpeg'
import terceiro from './assets/terceiro.jpeg'
import quarto from './assets/quarto.png'
import quinto from './assets/quinto.png'
import leadCareLogo from './assets/LeadCare.doctors.jpeg'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    clinic: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://vgh0i1co8qd1.manussite.space/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      const result = await response.json()
      
      if (response.ok) {
        alert('Obrigado pelo seu interesse! Seus dados foram salvos e entraremos em contato em breve.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          clinic: '',
          message: ''
        })
      } else {
        alert(`Erro: ${result.error || 'Erro ao enviar formulário'}`)
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      alert('Erro ao enviar formulário. Tente novamente ou entre em contato pelo WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const openImageModal = (image, title) => {
    setSelectedImage({ image, title })
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <img src={leadCareLogo} alt="Lead.Doctors Logo" className="w-12 h-12 object-contain" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Lead.Doctors</h1>
                <p className="text-sm text-cyan-500 font-medium">Convertendo Visitas em Conversões</p>
              </div>
            </div>
            <Button 
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2"
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=55984092226&text&type=phone_number&app_absent=0', '_blank')}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <Badge className="bg-cyan-500 text-white px-4 py-2 text-lg mb-4">
                🚀 Revolucione Sua Clínica
              </Badge>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Sua clínica investe em marketing, mas não entende o motivo de 
              <span className="text-cyan-300"> fechar poucos procedimentos?</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-xl md:text-2xl mb-8 text-blue-100">
              Transforme Sua Clínica em uma Máquina de Vendas com Inteligência Artificial
            </motion.p>
            
            <motion.p variants={fadeInUp} className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
              Pare de perder pacientes e comece a converter mais consultas em procedimentos com nosso sistema completo de IA para clínicas particulares.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=55984092226&text&type=phone_number&app_absent=0', '_blank')}
              >
                Quero Aumentar Minhas Vendas Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Background Image */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img src={healthcareAI} alt="Healthcare AI" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Problemas Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Principais problemas comerciais enfrentados por clínicas particulares
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificamos os gargalos que impedem sua clínica de alcançar todo seu potencial de vendas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8 text-red-500" />,
                title: "Atendimento Inadequado",
                description: "Secretária sabe informar o preço da consulta, mas não sabe conduzir o atendimento para conversão"
              },
              {
                icon: <Target className="w-8 h-8 text-red-500" />,
                title: "Falta de Cross-sell",
                description: "Não oferece tratamentos complementares para a base de pacientes existente"
              },
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: "Demora no WhatsApp",
                description: "Tempo de resposta lento no WhatsApp, perdendo leads quentes por falta de agilidade"
              },
              {
                icon: <Users className="w-8 h-8 text-red-500" />,
                title: "Abandono de Leads",
                description: "Abandona leads antigos achando que são desqualificados, perdendo oportunidades valiosas"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-red-500" />,
                title: "Falta de Acompanhamento",
                description: "Não acompanha o atendimento da secretária com feedbacks para melhorar o desempenho"
              },
              {
                icon: <Star className="w-8 h-8 text-red-500" />,
                title: "Sobrecarga da Equipe",
                description: "Sobrecarga da secretária, resultando em atendimento de baixa qualidade e estresse"
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-red-500">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      {problem.icon}
                      <CardTitle className="text-lg">{problem.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Soluções Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Como resolveremos esses problemas
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa metodologia comprovada transforma clínicas em máquinas de vendas eficientes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                {
                  icon: <TrendingUp className="w-8 h-8 text-green-500" />,
                  title: "Implementação de fluxo de atendimento e vendas com IA",
                  description: "Configuramos o sistema que vai trazer liberdade para sua secretária e vendas para sua clínica."
                },
                {
                  icon: <Users className="w-8 h-8 text-blue-500" />,
                  title: "Treinamento e desenvolvimento",
                  description: "Treinamos sua equipe para otimizar os processos comerciais e maximizar conversões."
                },
                {
                  icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
                  title: "Acompanhamento Mensal",
                  description: "Suporte semanal e reuniões mensais para ajustes estratégicos e melhoria contínua."
                },
                {
                  icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
                  title: "Disparos em massa",
                  description: "Campanhas calendarizadas para ajudar sua equipe a bater meta sem depender de novos leads."
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start space-x-4 mb-8"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{solution.title}</h4>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <img src={salesAI} alt="Sales AI Solutions" className="rounded-lg shadow-xl w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Como funciona nosso processo
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo estruturado e comprovado para transformar sua clínica
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Assinatura do contrato",
                description: "Formalizamos nossa parceria e definimos os objetivos específicos da sua clínica"
              },
              {
                step: "02", 
                title: "Reunião pré-projeto para formalização",
                description: "Alinhamos expectativas e planejamos a implementação personalizada"
              },
              {
                step: "03",
                title: "Primeiros 30 dias",
                description: "Implementação do CRM com IA e chatbot, mapeamento do funil de vendas, análise de scripts e treinamento completo da equipe"
              },
              {
                step: "04",
                title: "Demais meses",
                description: "Feedback semanal, reuniões mensais de alinhamento e suporte diário para garantir resultados consistentes"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, x: index % 2 === 0 ? -60 : 60 },
                  animate: { opacity: 1, x: 0, transition: { delay: index * 0.2 } }
                }}
                className="flex items-center mb-12 last:mb-0"
              >
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white font-bold text-xl mr-8">
                  {process.step}
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-lg">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases de Sucesso Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Conheça nossos cases
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resultados reais de clínicas que transformaram seus negócios conosco
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Resgate de Pacientes Inativos",
                result: "+150% em reativações",
                description: "Implementamos campanhas automatizadas que resgataram pacientes que não retornavam há mais de 6 meses",
                clinic: "Clínica Estética Premium",
                image: primeiro
              },
              {
                title: "Aumento em Procedimentos",
                result: "+300% em agendamentos",
                description: "Com o novo fluxo de atendimento, conseguimos triplicar os agendamentos de procedimentos em 60 dias",
                clinic: "A.I. Doctors",
                image: segundo
              },
              {
                title: "Otimização do Funil",
                result: "+85% em conversões",
                description: "Evitamos a perda de oportunidades com um funil de vendas estruturado e acompanhamento automatizado",
                clinic: "Clínica Dermatológica Avançada",
                image: terceiro
              },
              {
                title: "Feedback e Otimização",
                result: "Melhora na Conversão",
                description: "Identificamos e corrigimos o excesso de foco em leads novos, otimizando oportunidades quentes já no sistema.",
                clinic: "Clínica de Cirurgia Plástica",
                image: quarto
              },
              {
                title: "Cardiologista Mais Bem Avaliado",
                result: "+1000 visitas/mês no Google",
                description: "Ação de pós-vendas tornou um cardiologista no médico mais bem avaliado na região central do RS.",
                clinic: "Dr. Diego Roumow",
                image: quinto
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-t-4 border-t-green-500">
                  <CardHeader>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{caseStudy.result}</div>
                      <CardTitle className="text-xl mb-2">{caseStudy.title}</CardTitle>
                      <Badge variant="outline" className="text-blue-600 border-blue-600">
                        {caseStudy.clinic}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center mb-4">{caseStudy.description}</p>
                    {caseStudy.image && (
                      <div className="text-center">
                        <img 
                          src={caseStudy.image} 
                          alt={caseStudy.title} 
                          className="mt-4 rounded-lg shadow-md mx-auto cursor-pointer hover:opacity-80 transition-opacity max-w-full h-auto"
                          onClick={() => openImageModal(caseStudy.image, caseStudy.title)}
                        />
                        <p className="text-sm text-gray-500 mt-2">Clique na imagem para ampliar</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* Modal para ampliar imagens */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 text-white bg-black bg-opacity-50 rounded-lg p-4">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Diferenciais Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-4xl font-bold mb-4">
              Não é sobre implantar um CRM. É sobre fazer ele funcionar com sua equipe.
            </h3>
            <p className="text-xl text-blue-200 max-w-4xl mx-auto">
              Nossa diferença está no acompanhamento humano e na personalização para cada clínica
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12 text-cyan-400" />,
                title: "Treinamento Personalizado",
                description: "Cada equipe recebe treinamento específico para suas necessidades"
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-blue-400" />,
                title: "Suporte Diário",
                description: "Acompanhamento constante para garantir a implementação correta"
              },
              {
                icon: <TrendingUp className="w-12 h-12 text-cyan-500" />,
                title: "Resultados Mensuráveis",
                description: "Métricas claras e relatórios detalhados do progresso"
              },
              {
                icon: <CheckCircle className="w-12 h-12 text-blue-500" />,
                title: "Garantia de Sucesso",
                description: "Comprometimento total com os resultados da sua clínica"
              }
            ].map((differential, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                  initial: { opacity: 0, y: 40 },
                  animate: { opacity: 1, y: 0, transition: { delay: index * 0.1 } }
                }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  {differential.icon}
                </div>
                <h4 className="text-xl font-semibold mb-3">{differential.title}</h4>
                <p className="text-gray-300">{differential.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
              <blockquote className="text-2xl italic mb-4">
                "A LeadCare não apenas implementou a tecnologia, mas transformou nossa cultura de vendas. 
                Hoje nossa equipe é mais confiante e nossos resultados falam por si só."
              </blockquote>
              <cite className="text-orange-400 font-semibold">
                - Dr. Carlos Silva, Diretor da Clínica Estética Premium
              </cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h3 className="text-4xl font-bold mb-6">
                Pronto para transformar sua clínica em uma máquina de vendas?
              </h3>
              <p className="text-xl mb-8 text-cyan-100">
                Entre em contato conosco e descubra como podemos aumentar suas conversões em até 300% nos próximos 90 dias.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">(55) 9 8409-2226</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6" />
                  <span className="text-lg">contato@leadcare.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">Rua Jorge Pedro Abelin, 45, Nossa Senhora de Lourdes, CEP 97050-390</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Button 
                size="lg" 
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-lg"
                onClick={() => window.open("https://wa.me/5555984092226", "_blank")}
              >
                Nos chame no Whatsapp!
                <Phone className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <img src={leadCareLogo} alt="Lead.Doctors Logo" className="w-12 h-12 object-contain" />
              <div>
                <h4 className="text-2xl font-bold">Lead.Doctors</h4>
                <p className="text-cyan-400">Convertendo Visitas em Conversões</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transformando clínicas em máquinas de vendas através da inteligência artificial
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Lead.Doctors. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App



