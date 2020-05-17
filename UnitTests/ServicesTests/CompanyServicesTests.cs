using System;
using Xunit;
using NSubstitute;
using BludataTest.Services;
using BludataTest.Repositorio;
using BludataTest.Models;
using BludataTest.ValueObject;
using BludataTest.Enums;

namespace UnitTests.ServicesTests
{
    public class ServicesTests
    {
        private ICompanyService _companyService;
        private ICompanyRepository _companyRepository;        
        public ServicesTests()
        {
            _companyRepository = Substitute.For<ICompanyRepository>();
            _companyService = new CompanyService(_companyRepository);
        }   

        private Company GetCompanyExample()
        {
            var company = new Company(uf: "SC", tradingName: "Mercado Chicão", document: new Document("68.356.468/0001-57", EDocumentType.CNPJ));
            return company;       
        }

        [Fact]
        public void Should_create_company()
        {
            var company = GetCompanyExample();
            _companyService.Create(company);
            _companyRepository.Received(1).Create(Arg.Is<Company>(c => c.UF=="SC" 
                                                                  && c.TradingName=="Mercado Chicão" 
                                                                  && c.Document.ToString()=="68.356.468/0001-57"));
        }

        [Fact]
        public void Should_not_create_company()
        {
            var company = GetCompanyExample();
            company.UF = "L";
            Assert.Throws<Exception>(() => _companyService.Create(company));
        }  

        [Fact]
        public void Should_get_company_by_id()
        {
            var company = GetCompanyExample();
            var companyExampleId = new Guid();
            company.Id = companyExampleId;
            _companyRepository.Read(companyExampleId).Returns(company);
            var companyReceived = _companyService.Read(companyExampleId);
            Assert.Equal(company.TradingName, companyReceived.TradingName);        
        }

        //[Fact]
        //public void Should_not_get_company_by_id()
        //{
          //  var company = GetCompanyExample();
            //Assert.Throws<Exception>(() => _companyService.Create(company));
        //}       
    }
}